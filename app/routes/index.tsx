import { json } from "@remix-run/server-runtime";

import Navbar from "@components/Navbar/Navbar";

export async function loader({ request }: { request: any }) {
  const url = new URL(request.url);
  return json({ path: url.pathname });
}

export default function Index() {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="inset-0 sticky">
        <Navbar />
      </div>

      {/* Page Main Content */}
      <div className="relative mx-auto max-w-7xl py-6 bg-primary-light5"></div>
      {/* Footer */}
      {/* TODO: Add footer x-platform */}
    </main>
  );
}
