import { json } from "@remix-run/server-runtime";

import Footer from "@app/components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";

export async function loader({ request }: { request: any }) {
  const url = new URL(request.url);
  return json({ path: url.pathname });
}

export default function Index() {
  const contentHeight = "h-[calc(100vh_-_(4rem_+_2px_+_2rem))]"; // Full viewport height -navbar -navbarBorder -footer
  return (
    <main className="relative min-h-screen bg-background">
      <div className="inset-x-0 top-0 sticky z-50">
        <Navbar />
      </div>

      {/* Page Main Content */}
      <div className={`relative mx-auto max-w-7xl py-6 inset-0 ${contentHeight}`}></div>

      <div className="relative inset-x-0 bottom-0">
        <Footer />
      </div>
    </main>
  );
}
