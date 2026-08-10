import { Link } from "@tanstack/react-router";

import ashrithLogo from "@/assets/ashrithlogo.jpg";
import { cn } from "@/lib/utils";

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      to="/"
      className={cn("group flex min-w-0 items-center gap-3", className)}
      aria-label="Ashrith Group of Institutions — home"
    >
      <img
        src={ashrithLogo}
        alt="Ashrith Group of Institutions"
        width={44}
        height={44}
        className="h-11 w-11 shrink-0 rounded-[3px] object-cover"
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "truncate font-display text-[0.95rem] font-extrabold tracking-tight sm:text-[1.05rem]",
            tone === "light" ? "text-white" : "text-ink",
          )}
        >
          Ashrith Group
        </span>
        <span
          className={cn(
            "mt-1 truncate font-display text-[0.6rem] font-bold tracking-[0.16em] uppercase",
            tone === "light" ? "text-white/60" : "text-ink-soft",
          )}
        >
          of Institutions
        </span>
      </span>
    </Link>
  );
}
