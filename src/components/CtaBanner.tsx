import Button from "@/components/Button";

export default function CtaBanner() {
  return (
    <section className="bg-lord-orange px-5 py-16 text-lord-black">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold sm:text-3xl">
          행사 일정과 장소가 정해졌다면, 무대·포토존·음향·조명 구성을 함께 제안드릴 수 있습니다.
        </h2>
        <p className="mt-4 text-base text-black/70">
          행사명, 지역, 예상 인원, 설치 희망일을 남겨주시면 빠르게 견적 방향을 안내드립니다.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/about-contact" variant="secondary" className="!border-black/40 !text-lord-black hover:!border-black">
            빠른 견적 문의
          </Button>
          <Button href="/portfolio" variant="secondary" className="!border-black/40 !text-lord-black hover:!border-black">
            포트폴리오 보기
          </Button>
        </div>
      </div>
    </section>
  );
}
