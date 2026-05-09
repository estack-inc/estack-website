import Image from "next/image";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-white pt-12 pb-8 md:pt-20 md:pb-16">
      <div className="absolute top-0 right-0 w-[60%] max-w-2xl pointer-events-none -z-0">
        <Image
          src="/wave.svg"
          alt=""
          width={1512}
          height={348}
          className="w-full"
          aria-hidden
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {subtitle && (
          <p className="text-sm font-semibold tracking-[0.3em] text-brand mb-3 font-display">
            {subtitle}
          </p>
        )}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          {title}
        </h1>
      </div>
    </section>
  );
}
