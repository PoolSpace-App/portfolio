import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 gap-4 md:grid-cols-6 md:items-stretch",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  style,
  variant = "default",
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  variant?: "default" | "carousel";
}) => {
  const isCarousel = variant === "carousel";

  return (
    <div
      className={cn(
        "group/bento relative flex h-full flex-col",
        isCarousel
          ? "overflow-visible rounded-[48px] border border-neutral-200 bg-white shadow-none transition duration-200 hover:shadow-xl"
          : "overflow-visible rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
      style={style}
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={1.5}
        className="rounded-[inherit] z-10"
      />
      {header ? <div className="relative z-10">{header}</div> : null}
      <div
        className={cn(
          "relative z-10",
          isCarousel
            ? "p-5 md:p-6"
            : "flex-1 transition duration-200 group-hover/bento:translate-x-2",
        )}
      >
        {icon}
        {isCarousel ? (
          <>
            {title}
            <div className="font-sans">{description}</div>
          </>
        ) : (
          <>
            <div className="mb-2 mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
              {title}
            </div>
            <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
              {description}
            </div>
          </>
        )}
      </div>
    </div>
  );
}; 