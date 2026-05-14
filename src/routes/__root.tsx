import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { FilmGrain } from "@/components/FilmGrain";
import { Cursor } from "@/components/Cursor";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bone px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="display mt-4 text-7xl text-forest">Lost in the lab</h1>
        <p className="mt-6 text-sm text-ink-soft">
          That page hasn't been brewed yet.
        </p>
        <Link
          to="/"
          className="mt-10 inline-block border border-ink px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-ink hover:bg-ink hover:text-bone"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-bone px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow">Something interrupted the brew</p>
        <h1 className="display mt-4 text-5xl text-ink">Please try again.</h1>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-10 inline-block border border-ink px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-ink hover:bg-ink hover:text-bone"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

const SITE_NAME = "Lab Coffee Works";
const SITE_DESC =
  "Lab Coffee Works — specialty coffee, ceremonial matcha and seasonal botanicals in the heart of Birmingham. A considered laboratory for slow afternoons.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE_NAME} — Specialty Coffee in Birmingham` },
      { name: "description", content: SITE_DESC },
      {
        name: "keywords",
        content:
          "specialty coffee Birmingham, Lab Coffee Works, best coffee shop Birmingham, matcha Birmingham, single origin espresso Birmingham, third wave coffee, Newhall Street coffee, Jewellery Quarter coffee, independent coffee Birmingham UK",
      },
      { name: "author", content: SITE_NAME },
      { name: "theme-color", content: "#1f3a2c" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: `${SITE_NAME} — Specialty Coffee in Birmingham` },
      { property: "og:description", content: SITE_DESC },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${SITE_NAME} — Specialty Coffee in Birmingham` },
      { name: "twitter:description", content: SITE_DESC },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: SITE_NAME,
          description: SITE_DESC,
          servesCuisine: ["Coffee", "Matcha", "Pastry"],
          priceRange: "££",
          address: {
            "@type": "PostalAddress",
            streetAddress: "27 Newhall Street",
            addressLocality: "Birmingham",
            postalCode: "B3 3PU",
            addressCountry: "GB",
          },
          openingHours: ["Mo-Fr 07:30-18:00", "Sa 08:00-18:00", "Su 09:00-16:00"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen paper">
        <Cursor />
        <FilmGrain />
        <Nav />
        <PageTransition>
          <Outlet />
        </PageTransition>
      </div>
    </QueryClientProvider>
  );
}
