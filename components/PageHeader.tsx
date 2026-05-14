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
    <section className="relative pt-10 md:pt-16 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {subtitle && (
          <p className="text-sm font-medium text-brand mb-2 font-display">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          {title}
        </h1>
      </div>
      {showWave && (
        <div className="mt-8 md:mt-12 w-full pointer-events-none overflow-hidden">
          <Image
            src="/wave-ribbon.svg"
            alt=""
            width={2191}
            height={251}
            className="w-full h-auto"
            aria-hidden
            priority
          />
        </div>
      )}
    </section>
  );
}
