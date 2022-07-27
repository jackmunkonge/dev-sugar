import type { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { theme } from "tailwind.config";

import sadJar from "@assets/images/sadJar.png";

import { Footer, Navbar, RootBoundary, RootHTTPBoundary } from "./components";
import { getUser } from "./session.server";
import global from "./styles/global.css";
import tailwindStylesheetUrl from "./styles/tailwind.css";

export const ErrorBoundary = ({ error }: { error: any }) => {
  console.error(error);
  return (
    <RootBoundary
      title="Dev Sugar | Oh no!"
      heading="Something went wrong..."
      image={sadJar}
      message={error.message || "Unknown"}
    />
  );
};

export const CatchBoundary = () => <RootHTTPBoundary />;

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: global },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Dev Sugar | Home",
  viewport: "width=device-width,initial-scale=1",
  "theme-color": theme.colors.background,
});

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    user: await getUser(request),
  });
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <div className="relative min-h-screen bg-background">
          <header className="inset-x-0 top-0 sticky z-50">
            <Navbar />
          </header>
          <Outlet />
          <footer className="fixed inset-x-0 bottom-0 w-100">
            <Footer />
          </footer>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
