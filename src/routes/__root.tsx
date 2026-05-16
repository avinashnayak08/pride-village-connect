import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { LangProvider } from "@/lib/lang";
import { BottomNav } from "@/components/BottomNav";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-orange-50 px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-orange-600">404</h1>
        <p className="mt-2 text-sm text-slate-600">Page not found</p>
        <Link to="/" className="mt-6 inline-block rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white">
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-orange-50 px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-slate-600">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Shaale Namma Pride — Our School App" },
      { name: "description", content: "Mid-day meals, school facilities, student achievements and feedback for our government school." },
      { name: "theme-color", content: "#ea7c1c" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-title", content: "Shaale Pride" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { property: "og:title", content: "Shaale Namma Pride — Our School App" },
      { property: "og:description", content: "Mid-day meals, school facilities, student achievements and feedback for our government school." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Shaale Namma Pride — Our School App" },
      { name: "twitter:description", content: "Mid-day meals, school facilities, student achievements and feedback for our government school." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/89b47174-f70a-47b8-aa51-4e82e4668323/id-preview-0c0342ef--7a14fcff-2586-47aa-83b0-af4cb2d93388.lovable.app-1778950985364.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/89b47174-f70a-47b8-aa51-4e82e4668323/id-preview-0c0342ef--7a14fcff-2586-47aa-83b0-af4cb2d93388.lovable.app-1778950985364.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/icon-192.png" },
      { rel: "icon", href: "/icon-192.png", type: "image/png" },
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
      <LangProvider>
        <div className="min-h-screen bg-orange-50/40 pb-20">
          <div className="max-w-md mx-auto">
            <Outlet />
          </div>
          <BottomNav />
        </div>
      </LangProvider>
    </QueryClientProvider>
  );
}
