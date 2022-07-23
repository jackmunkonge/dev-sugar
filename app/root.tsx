import type { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { theme } from "tailwind.config";

import { Navbar } from "./components";
import Footer from "./components/Footer/Footer";
import { getUser } from "./session.server";
import global from "./styles/global.css";
import tailwindStylesheetUrl from "./styles/tailwind.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: global },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Dev Sugar",
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
          {/* TODO: Add error boundary */}
          {/* TODO: Add catch boundary */}
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
