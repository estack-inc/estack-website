import Image from "next/image";

export default function PageHeader({
  title,
  subtitle,
  showWave = true,
}: {
  title: string;
  subtitle?: string;
  showWave?: boolean;
}) {
  return (
    <section className="relative bg-white pt-6 pb-4 md:pt-10 md:pb-6 overflow-hidden">
      {showWave && (
        <div className="absolute top-0 left-0 right-0 w-full pointer-events-none -z-0">
          <Image
            src="/wave.svg"
            alt=""
            width={1512}
            height={348}
            className="w-full h-auto max-h-[110px] md:max-h-[140px] object-cover object-top"
            aria-hidden
            priority
          />
        </div>
      )}
      <div
        className={`relative mx-auto max-w-7xl px-5 md:px-8 ${
          showWave ? "pt-8 md:pt-14" : "pt-2 md:pt-6"
        }`}
      >
        {subtitle && (
          <p className="text-sm font-medium tracking-[0.3em] text-brand mb-2 font-display">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          {title}
        </h1>
      </div>
    </section>
  );
}
