import { json } from "@remix-run/server-runtime";

import { useOptionalUser } from "@app/utils/utils";
import Navbar from "@components/Navbar/Navbar";

export async function loader({ request }: { request: any }) {
  const url = new URL(request.url);
  return json({ path: url.pathname });
}

export default function Index() {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="inset-0">
        <Navbar />
      </div>

      {/* Page Main Content */}
      <div className="relative mx-auto max-w-7xl border-4 border-primary py-6"></div>

      {/* Footer */}
      {/* TODO: Add footer x-platform */}
    </main>
  );
}
