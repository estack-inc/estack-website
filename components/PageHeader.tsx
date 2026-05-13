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
    <section className="relative bg-white pt-10 md:pt-16 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {subtitle && (
          <p className="text-sm font-medium tracking-[0.3em] text-brand mb-2 font-display">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          {title}
        </h1>
      </div>
      {showWave && (
        <div className="mt-6 md:mt-10 w-full pointer-events-none">
          <Image
            src="/wave.svg"
            alt=""
            width={1512}
            height={348}
            className="w-full h-auto"
            aria-hidden
            priority
          />
        </div>
      )}
    </section>
  );
}
