import Image from "next/image";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-white pt-10 pb-6 md:pt-16 md:pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 w-full pointer-events-none -z-0">
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
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-16 md:pt-24">
        {subtitle && (
          <p className="text-xs font-semibold tracking-[0.3em] text-brand mb-2 font-display">
            {subtitle}
          </p>
        )}
        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          {title}
        </h1>
      </div>
    </section>
  );
}
