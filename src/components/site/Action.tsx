import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export const actionVariants = cva(
  "inline-flex items-center justify-center gap-2 font-display text-sm font-bold tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure",
  {
    variants: {
      variant: {
        primary:
          "bg-saffron text-[oklch(0.24_0.05_60)] hover:bg-saffron-bright hover:shadow-[0_10px_24px_-12px_oklch(0.754_0.165_62.8_/_0.9)] active:translate-y-px",
        navy: "bg-navy text-white hover:bg-navy-deep active:translate-y-px",
        outline:
          "border border-navy/25 bg-transparent text-navy hover:border-navy hover:bg-navy hover:text-white active:translate-y-px",
        ghostLight:
          "border border-white/35 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-navy active:translate-y-px",
        link: "text-navy underline-offset-4 hover:text-azure hover:underline px-0",
      },
      size: {
        sm: "h-9 rounded-[4px] px-4 text-[0.8125rem]",
        md: "h-11 rounded-[4px] px-6",
        lg: "h-12 rounded-[4px] px-7 text-[0.9375rem] md:h-[52px] md:px-8",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Variants = VariantProps<typeof actionVariants>;

type LinkProps = Omit<ComponentProps<typeof Link>, "to"> & { to: string };

export function ActionLink({ className, variant, size, ...props }: LinkProps & Variants) {
  const linkProps = props as ComponentProps<typeof Link>;
  return <Link className={cn(actionVariants({ variant, size }), className)} {...linkProps} />;
}

export function ActionButton({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & Variants) {
  return <button className={cn(actionVariants({ variant, size }), className)} {...props} />;
}

export function ActionAnchor({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"a"> & Variants) {
  return <a className={cn(actionVariants({ variant, size }), className)} {...props} />;
}
