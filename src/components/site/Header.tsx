import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { ActionLink } from "@/components/site/Action";
import { Logo } from "@/components/site/Logo";
import { mainNav, org } from "@/data/site";
import { cn } from "@/lib/utils";

function UtilityBar() {
  return (
    <div className="hidden bg-navy-deep text-white lg:block">
      <div className="shell flex h-10 items-center justify-between gap-6 text-[0.75rem]">
        <ul className="flex min-w-0 items-center gap-6">
          <li className="flex min-w-0 items-center gap-2">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-saffron" aria-hidden="true" />
            <span className="truncate text-white/80">{org.address.full}</span>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 shrink-0 text-saffron" aria-hidden="true" />
            <a
              className="text-white/80 transition-colors hover:text-white"
              href={`tel:${org.phones[0].replace(/\s/g, "")}`}
            >
              {org.phones[0]}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 shrink-0 text-saffron" aria-hidden="true" />
            <a
              className="text-white/80 transition-colors hover:text-white"
              href={`mailto:${org.email}`}
            >
              {org.email}
            </a>
          </li>
        </ul>
        <Link
          to="/admissions"
          className="shrink-0 font-display text-[0.7rem] font-bold tracking-[0.14em] text-saffron-bright uppercase transition-colors hover:text-white"
        >
          Admissions Open {org.admissionYear}
        </Link>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (to: string) => pathname === to || pathname.startsWith(to + "/");

  return (
    <header className="sticky top-0 z-50">
      <UtilityBar />
      <div
        className={cn(
          "border-b border-hairline bg-white/95 backdrop-blur transition-all duration-300",
          scrolled && "shadow-[0_10px_30px_-24px_oklch(0.308_0.055_246.7_/_0.7)]",
        )}
      >
        <div
          className={cn(
            "shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 transition-all duration-300 lg:flex lg:justify-between",
            scrolled ? "h-16 lg:h-[68px]" : "h-[68px] lg:h-20",
          )}
        >
          <Logo />

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.to} className="group relative">
                  <Link
                    to={item.to}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 font-display text-[0.82rem] font-bold tracking-tight transition-colors",
                      isActive(item.to) ? "text-navy" : "text-ink-soft hover:text-navy",
                    )}
                  >
                    {item.label}
                    {item.children ? (
                      <ChevronDown
                        className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                        aria-hidden="true"
                      />
                    ) : null}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3 -bottom-px h-[2px] origin-left scale-x-0 bg-saffron transition-transform duration-300",
                        isActive(item.to) && "scale-x-100",
                      )}
                    />
                  </Link>
                  {item.children ? (
                    <div className="invisible absolute top-full left-0 w-80 translate-y-2 border border-hairline bg-white p-2 opacity-0 shadow-lift transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block px-3 py-2.5 text-[0.82rem] leading-snug text-ink-soft transition-colors hover:bg-mist hover:text-navy"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ActionLink to="/admissions" size="sm" className="hidden sm:inline-flex xl:size-auto">
              Apply Now
            </ActionLink>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-11 w-11 shrink-0 place-items-center border border-hairline text-navy transition-colors hover:bg-mist xl:hidden"
            >
              {open ? <Menu className="hidden" /> : null}
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        hidden={!open}
        className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-hairline bg-white xl:hidden"
      >
        <nav aria-label="Mobile" className="shell py-4">
          <ul className="divide-y divide-hairline">
            {mainNav.map((item) => (
              <li key={item.to}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.to}
                    className={cn(
                      "flex-1 py-3.5 font-display text-[0.95rem] font-bold",
                      isActive(item.to) ? "text-navy" : "text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={openGroup === item.to}
                      onClick={() => setOpenGroup((g) => (g === item.to ? null : item.to))}
                      className="grid h-10 w-10 shrink-0 place-items-center text-ink-soft"
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openGroup === item.to && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  ) : null}
                </div>
                {item.children && openGroup === item.to ? (
                  <ul className="mb-3 space-y-1 border-l-2 border-saffron pl-4">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link to={child.to} className="block py-2 text-sm text-ink-soft">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>

          <div className="mt-5 grid gap-2">
            <ActionLink to="/admissions" size="lg" className="w-full">
              Apply Now
            </ActionLink>
            <ActionLink to="/contact" variant="outline" size="lg" className="w-full">
              Contact Admissions
            </ActionLink>
          </div>

          <ul className="mt-5 space-y-2 pb-4 text-sm text-ink-soft">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
              {org.address.full}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
              <a href={`tel:${org.phones[0].replace(/\s/g, "")}`}>{org.phones[0]}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-saffron" aria-hidden="true" />
              <a href={`mailto:${org.email}`} className="break-all">
                {org.email}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
