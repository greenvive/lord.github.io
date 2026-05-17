const STORAGE_KEY = "personal-planner-state-v1";

const statusLabels = {
  planned: "예정",
  in_progress: "진행 중",
  completed: "완료",
  postponed: "미룸",
};

const priorityLabels = {
  low: "낮음",
  medium: "보통",
  high: "높음",
};

const defaultCategories = [
  { id: "work", name: "업무", color: "#2563eb", sortOrder: 1 },
  { id: "study", name: "공부", color: "#7c3aed", sortOrder: 2 },
  { id: "health", name: "건강", color: "#16a34a", sortOrder: 3 },
  { id: "family", name: "가족", color: "#ea580c", sortOrder: 4 },
  { id: "personal", name: "개인", color: "#ca8a04", sortOrder: 5 },
];

const today = new Date();
let state = loadState();
let activeView = "home";
let currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
let selectedDate = toDateInputValue(today);

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const elements = {
  viewTitle: $("#viewTitle"),
  todayLabel: $("#todayLabel"),
  monthCompletion: $("#monthCompletion"),
  monthCompletionBar: $("#monthCompletionBar"),
  todayCompletion: $("#todayCompletion"),
  todayCompletionDetail: $("#todayCompletionDetail"),
  todayTaskCount: $("#todayTaskCount"),
  postponedCount: $("#postponedCount"),
  dueSoonCount: $("#dueSoonCount"),
  focusTasks: $("#focusTasks"),
  categorySummary: $("#categorySummary"),
  todayTasks: $("#todayTasks"),
  completedTasks: $("#completedTasks"),
  todayOpenCount: $("#todayOpenCount"),
  todayDoneCount: $("#todayDoneCount"),
  allTasks: $("#allTasks"),
  filteredCount: $("#filteredCount"),
  categoryFilter: $("#categoryFilter"),
  statusFilter: $("#statusFilter"),
  searchInput: $("#searchInput"),
  calendarTitle: $("#calendarTitle"),
  calendarGrid: $("#calendarGrid"),
  selectedDateTitle: $("#selectedDateTitle"),
  selectedDateCount: $("#selectedDateCount"),
  selectedDateTasks: $("#selectedDateTasks"),
  taskDialog: $("#taskDialog"),
  taskForm: $("#taskForm"),
  taskFormTitle: $("#taskFormTitle"),
  taskId: $("#taskId"),
  taskTitle: $("#taskTitle"),
  taskDate: $("#taskDate"),
  taskCategory: $("#taskCategory"),
  taskPriority: $("#taskPriority"),
  taskEstimate: $("#taskEstimate"),
  taskDescription: $("#taskDescription"),
  deleteTask: $("#deleteTask"),
};

boot();

function boot() {
  elements.todayLabel.textContent = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "full",
  }).format(today);

  bindEvents();
  renderCategoryOptions();
  render();
}

function bindEvents() {
  $$(".nav-item, .mobile-nav-item").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  $$("[data-view-link]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.viewLink));
  });

  $("#openTaskForm").addEventListener("click", () => openTaskForm());
  $("#closeTaskForm").addEventListener("click", closeTaskForm);
  $("#cancelTaskForm").addEventListener("click", closeTaskForm);

  elements.taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveTaskFromForm();
  });

  elements.deleteTask.addEventListener("click", () => {
    const id = elements.taskId.value;
    if (!id) return;
    state.tasks = state.tasks.filter((task) => task.id !== id);
    persist();
    closeTaskForm();
    render();
  });

  elements.searchInput.addEventListener("input", renderTasksView);
  elements.categoryFilter.addEventListener("change", renderTasksView);
  elements.statusFilter.addEventListener("change", renderTasksView);

  $("#prevMonth").addEventListener("click", () => {
    currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    renderCalendar();
  });

  $("#nextMonth").addEventListener("click", () => {
    currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
    renderCalendar();
  });

  document.body.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) return;

    const taskId = actionButton.dataset.id;
    const action = actionButton.dataset.action;

    if (action === "toggle") toggleTask(taskId);
    if (action === "edit") openTaskForm(taskId);
    if (action === "postpone") postponeTask(taskId);
    if (action === "select-date") {
      selectedDate = actionButton.dataset.date;
      renderCalendar();
    }
  });
}

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  const todayValue = toDateInputValue(today);
  const tomorrowValue = toDateInputValue(addDays(today, 1));
  const nextWeekValue = toDateInputValue(addDays(today, 5));

  return {
    categories: defaultCategories,
    tasks: [
      createTask({
        title: "서비스 MVP 범위 정리",
        date: todayValue,
        categoryId: "work",
        priority: "high",
        estimatedMinutes: 45,
        description: "오늘 화면, 할 일, 캘린더의 첫 구현 범위를 정한다.",
      }),
      createTask({
        title: "React 상태관리 복습",
        date: todayValue,
        categoryId: "study",
        priority: "medium",
        estimatedMinutes: 30,
      }),
      createTask({
        title: "저녁 산책 30분",
        date: todayValue,
        categoryId: "health",
        priority: "low",
        estimatedMinutes: 30,
      }),
      createTask({
        title: "주간 회고 메모 정리",
        date: tomorrowValue,
        categoryId: "personal",
        priority: "medium",
        status: "postponed",
        postponedCount: 1,
      }),
      createTask({
        title: "가족 일정 확인",
        date: nextWeekValue,
        categoryId: "family",
        priority: "medium",
      }),
    ],
  };
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function createTask(overrides) {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    date: toDateInputValue(today),
    categoryId: "work",
    priority: "medium",
    status: "planned",
    estimatedMinutes: null,
    completedAt: null,
    postponedCount: 0,
    createdAt: now,
    updatedAt: now,
    ...overrides,
  };
}

function render() {
  renderShell();
  renderHome();
  renderToday();
  renderTasksView();
  renderCalendar();
}

function renderShell() {
  const monthTasks = state.tasks.filter((task) => isSameMonth(parseDate(task.date), currentMonth));
  const completedCount = monthTasks.filter((task) => task.status === "completed").length;
  const completion = percentage(completedCount, monthTasks.length);

  elements.monthCompletion.textContent = `${completion}%`;
  elements.monthCompletionBar.style.width = `${completion}%`;
}

function renderHome() {
  const todayTasks = tasksForDate(selectedToday());
  const completed = todayTasks.filter((task) => task.status === "completed");
  const openTasks = todayTasks.filter((task) => task.status !== "completed");
  const completion = percentage(completed.length, todayTasks.length);
  const dueSoon = state.tasks.filter((task) => {
    if (task.status === "completed") return false;
    const diff = dayDifference(selectedToday(), task.date);
    return diff >= 0 && diff <= 3;
  });

  elements.todayCompletion.textContent = `${completion}%`;
  elements.todayCompletionDetail.textContent = `${completed.length}개 중 ${todayTasks.length}개 완료`;
  elements.todayTaskCount.textContent = openTasks.length;
  elements.postponedCount.textContent = state.tasks.filter((task) => task.status === "postponed").length;
  elements.dueSoonCount.textContent = dueSoon.length;

  const focusTasks = openTasks
    .slice()
    .sort(compareByPriorityThenCreated)
    .slice(0, 3);
  renderTaskList(elements.focusTasks, focusTasks, { compact: true });
  renderCategorySummary();
}

function renderToday() {
  const todayTasks = tasksForDate(selectedToday());
  const openTasks = todayTasks
    .filter((task) => task.status !== "completed")
    .sort(compareByPriorityThenCreated);
  const completed = todayTasks
    .filter((task) => task.status === "completed")
    .sort((a, b) => new Date(b.completedAt || b.updatedAt) - new Date(a.completedAt || a.updatedAt));

  elements.todayOpenCount.textContent = `${openTasks.length}개`;
  elements.todayDoneCount.textContent = `${completed.length}개`;
  renderTaskList(elements.todayTasks, openTasks);
  renderTaskList(elements.completedTasks, completed, { compact: true });
}

function renderTasksView() {
  const query = elements.searchInput.value.trim().toLowerCase();
  const categoryId = elements.categoryFilter.value;
  const status = elements.statusFilter.value;

  const filtered = state.tasks
    .filter((task) => {
      const matchesQuery =
        !query ||
        task.title.toLowerCase().includes(query) ||
        task.description.toLowerCase().includes(query);
      const matchesCategory = categoryId === "all" || task.categoryId === categoryId;
      const matchesStatus = status === "all" || task.status === status;
      return matchesQuery && matchesCategory && matchesStatus;
    })
    .sort((a, b) => {
      const dateDiff = a.date.localeCompare(b.date);
      if (dateDiff !== 0) return dateDiff;
      return compareByPriorityThenCreated(a, b);
    });

  elements.filteredCount.textContent = `${filtered.length}개`;
  renderTaskList(elements.allTasks, filtered);
}

function renderCalendar() {
  elements.calendarTitle.textContent = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
  }).format(currentMonth);

  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const gridStart = addDays(firstDay, -firstDay.getDay());
  const days = Array.from({ length: 42 }, (_, index) => addDays(gridStart, index));

  elements.calendarGrid.innerHTML = days
    .map((date) => {
      const dateValue = toDateInputValue(date);
      const dayTasks = tasksForDate(dateValue).filter((task) => task.status !== "completed");
      const grouped = groupByCategory(dayTasks);
      const isOtherMonth = date.getMonth() !== currentMonth.getMonth();
      const isToday = dateValue === selectedToday();
      const isSelected = dateValue === selectedDate;

      return `
        <button
          class="calendar-day ${isOtherMonth ? "other-month" : ""} ${isToday ? "today" : ""} ${isSelected ? "selected" : ""}"
          type="button"
          data-action="select-date"
          data-date="${dateValue}"
        >
          <span class="day-number">${date.getDate()}</span>
          <span class="day-badges">
            ${grouped
              .slice(0, 3)
              .map(
                ({ category, count }) => `
                  <span class="day-badge" style="--category-color: ${category.color}">
                    <span>${escapeHtml(category.name)}</span>
                    <strong>${count}</strong>
                  </span>
                `,
              )
              .join("")}
          </span>
        </button>
      `;
    })
    .join("");

  renderSelectedDate();
  renderShell();
}

function renderSelectedDate() {
  const tasks = tasksForDate(selectedDate).sort(compareByPriorityThenCreated);
  elements.selectedDateTitle.textContent = new Intl.DateTimeFormat("ko-KR", {
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(parseDate(selectedDate));
  elements.selectedDateCount.textContent = `${tasks.length}개`;
  renderTaskList(elements.selectedDateTasks, tasks, { compact: true });
}

function renderCategorySummary() {
  const activeTasks = state.tasks.filter((task) => task.status !== "completed");
  const grouped = groupByCategory(activeTasks);
  const max = Math.max(...grouped.map((item) => item.count), 1);

  elements.categorySummary.innerHTML = grouped.length
    ? grouped
        .map(
          ({ category, count }) => `
            <div class="category-row">
              <span class="category-name">
                <span class="category-dot" style="--category-color: ${category.color}"></span>
                ${escapeHtml(category.name)}
              </span>
              <span class="category-bar" style="--category-color: ${category.color}">
                <span style="width: ${(count / max) * 100}%"></span>
              </span>
              <strong>${count}</strong>
            </div>
          `,
        )
        .join("")
    : emptyState("진행 중인 태스크가 없습니다.");
}

function renderTaskList(container, tasks, options = {}) {
  if (!tasks.length) {
    container.innerHTML = emptyState("등록된 태스크가 없습니다.");
    return;
  }

  container.innerHTML = tasks.map((task) => taskCard(task, options)).join("");
}

function taskCard(task, options = {}) {
  const category = getCategory(task.categoryId);
  const isCompleted = task.status === "completed";
  const estimate = task.estimatedMinutes ? `<span>${task.estimatedMinutes}분</span>` : "";
  const postponed =
    task.postponedCount > 0 ? `<span>미룸 ${task.postponedCount}회</span>` : "";
  const description =
    !options.compact && task.description
      ? `<p class="task-description">${escapeHtml(task.description)}</p>`
      : "";

  return `
    <article class="task-card ${isCompleted ? "completed" : ""}">
      <button
        class="task-check ${isCompleted ? "done" : ""}"
        type="button"
        data-action="toggle"
        data-id="${task.id}"
        aria-label="${isCompleted ? "완료 취소" : "완료 처리"}"
      >✓</button>

      <div>
        <div class="task-title-row">
          <span class="category-dot" style="--category-color: ${category.color}"></span>
          <span class="task-title">${escapeHtml(task.title)}</span>
        </div>
        <div class="task-meta">
          <span>${formatShortDate(task.date)}</span>
          <span>${escapeHtml(category.name)}</span>
          <span class="priority-pill priority-${task.priority}">${priorityLabels[task.priority]}</span>
          <span class="status-pill status-${task.status}">${statusLabels[task.status]}</span>
          ${estimate}
          ${postponed}
        </div>
        ${description}
      </div>

      <div class="task-actions">
        <button class="small-button" type="button" data-action="edit" data-id="${task.id}">수정</button>
        ${
          isCompleted
            ? ""
            : `<button class="small-button warn" type="button" data-action="postpone" data-id="${task.id}">내일</button>`
        }
      </div>
    </article>
  `;
}

function renderCategoryOptions() {
  const taskCategoryOptions = state.categories
    .slice()
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((category) => `<option value="${category.id}">${escapeHtml(category.name)}</option>`)
    .join("");

  elements.taskCategory.innerHTML = taskCategoryOptions;
  elements.categoryFilter.innerHTML = `
    <option value="all">전체</option>
    ${taskCategoryOptions}
  `;
}

function setView(view) {
  activeView = view;
  const titleMap = {
    home: "홈",
    today: "오늘",
    tasks: "할 일",
    calendar: "캘린더",
  };

  elements.viewTitle.textContent = titleMap[view];

  $$(".view").forEach((section) => section.classList.remove("active-view"));
  $(`#${view}View`).classList.add("active-view");

  $$(".nav-item, .mobile-nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
}

function openTaskForm(taskId = null) {
  const task = taskId ? state.tasks.find((item) => item.id === taskId) : null;
  elements.taskForm.reset();
  elements.taskId.value = task?.id || "";
  elements.taskFormTitle.textContent = task ? "태스크 수정" : "태스크 추가";
  elements.taskTitle.value = task?.title || "";
  elements.taskDate.value = task?.date || selectedDate || selectedToday();
  elements.taskCategory.value = task?.categoryId || state.categories[0].id;
  elements.taskPriority.value = task?.priority || "medium";
  elements.taskEstimate.value = task?.estimatedMinutes || "";
  elements.taskDescription.value = task?.description || "";
  elements.deleteTask.classList.toggle("hidden", !task);

  if (typeof elements.taskDialog.showModal === "function") {
    elements.taskDialog.showModal();
  } else {
    elements.taskDialog.setAttribute("open", "");
  }

  elements.taskTitle.focus();
}

function closeTaskForm() {
  if (typeof elements.taskDialog.close === "function") {
    elements.taskDialog.close();
  } else {
    elements.taskDialog.removeAttribute("open");
  }
}

function saveTaskFromForm() {
  const id = elements.taskId.value;
  const existing = state.tasks.find((task) => task.id === id);
  const nextTask = {
    title: elements.taskTitle.value.trim(),
    date: elements.taskDate.value,
    categoryId: elements.taskCategory.value,
    priority: elements.taskPriority.value,
    estimatedMinutes: elements.taskEstimate.value ? Number(elements.taskEstimate.value) : null,
    description: elements.taskDescription.value.trim(),
    updatedAt: new Date().toISOString(),
  };

  if (!nextTask.title || !nextTask.date) return;

  if (existing) {
    Object.assign(existing, nextTask);
  } else {
    state.tasks.unshift(createTask(nextTask));
  }

  selectedDate = nextTask.date;
  currentMonth = new Date(parseDate(nextTask.date).getFullYear(), parseDate(nextTask.date).getMonth(), 1);
  persist();
  closeTaskForm();
  render();
}

function toggleTask(taskId) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) return;

  const isCompleted = task.status === "completed";
  task.status = isCompleted ? "planned" : "completed";
  task.completedAt = isCompleted ? null : new Date().toISOString();
  task.updatedAt = new Date().toISOString();

  persist();
  render();
}

function postponeTask(taskId) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) return;

  task.date = toDateInputValue(addDays(parseDate(task.date), 1));
  task.status = "postponed";
  task.postponedCount = (task.postponedCount || 0) + 1;
  task.updatedAt = new Date().toISOString();
  selectedDate = task.date;

  persist();
  render();
}

function tasksForDate(dateValue) {
  return state.tasks.filter((task) => task.date === dateValue);
}

function groupByCategory(tasks) {
  const counts = new Map();
  tasks.forEach((task) => {
    counts.set(task.categoryId, (counts.get(task.categoryId) || 0) + 1);
  });

  return state.categories
    .slice()
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((category) => ({
      category,
      count: counts.get(category.id) || 0,
    }))
    .filter((item) => item.count > 0);
}

function getCategory(categoryId) {
  return state.categories.find((category) => category.id === categoryId) || state.categories[0];
}

function compareByPriorityThenCreated(a, b) {
  const order = { high: 0, medium: 1, low: 2 };
  const priorityDiff = order[a.priority] - order[b.priority];
  if (priorityDiff !== 0) return priorityDiff;
  return new Date(a.createdAt) - new Date(b.createdAt);
}

function percentage(part, total) {
  if (!total) return 0;
  return Math.round((part / total) * 100);
}

function selectedToday() {
  return toDateInputValue(today);
}

function parseDate(dateValue) {
  const [year, month, day] = dateValue.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function toDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function dayDifference(fromDateValue, toDateValue) {
  const from = parseDate(fromDateValue);
  const to = parseDate(toDateValue);
  return Math.round((to - from) / 86400000);
}

function isSameMonth(date, monthDate) {
  return date.getFullYear() === monthDate.getFullYear() && date.getMonth() === monthDate.getMonth();
}

function formatShortDate(dateValue) {
  return new Intl.DateTimeFormat("ko-KR", {
    month: "numeric",
    day: "numeric",
    weekday: "short",
  }).format(parseDate(dateValue));
}

function emptyState(message) {
  return `<div class="empty-state">${message}</div>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
