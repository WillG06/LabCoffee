import { Outlet, createRootRouteWithContext, Link } from "@tanstack/react-router"
import type { QueryClient } from "@tanstack/react-query"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { PageTransition } from "@/components/PageTransition"
import { FilmGrain } from "@/components/FilmGrain"
import { Cursor } from "@/components/Cursor"
import appCss from "../styles.css?url"

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Cursor />
      <FilmGrain />
      <Nav />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </>
  )
}