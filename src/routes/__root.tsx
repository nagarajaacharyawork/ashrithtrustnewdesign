import { Link, Outlet, createRootRoute, useRouter } from "@tanstack/react-router";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-haze px-4 py-20">
      <div className="max-w-lg text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3 font-display text-5xl font-extrabold text-navy md:text-6xl">
          Page not found
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          The page you are looking for does not exist or may have been moved. Use the navigation
          above, or start again from the homepage.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex h-11 items-center justify-center bg-saffron px-6 font-display text-sm font-bold text-[oklch(0.24_0.05_60)] transition-colors hover:bg-saffron-bright"
          >
            Go to homepage
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-11 items-center justify-center border border-navy/25 px-6 font-display text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-haze px-4 py-20">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-extrabold text-navy">This page didn't load</h1>
        <p className="mt-3 text-sm text-ink-soft">
          Something went wrong. You can try again or return to the homepage.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-11 items-center justify-center bg-saffron px-6 font-display text-sm font-bold text-[oklch(0.24_0.05_60)] transition-colors hover:bg-saffron-bright"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex h-11 items-center justify-center border border-navy/25 px-6 font-display text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to main content
      </a>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
