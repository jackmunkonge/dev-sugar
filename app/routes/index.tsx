import { json } from "@remix-run/node";
import { theme } from "tailwind.config";

import Footer from "@app/components/Footer/Footer";
import { Body1, H5 } from "@app/components/Typography";
import Navbar from "@components/Navbar/Navbar";

export async function loader({ request }: { request: any }) {
  const url = new URL(request.url);
  return json({ path: url.pathname });
}

export default function Index() {
  const contentHeight = "h-[calc(100vh_-_(4rem_+_2px_+_2rem))]"; // Full viewport height -navbar -navbarBorder -footer
  return (
    <div className="relative min-h-screen bg-background">
      <header className="inset-x-0 top-0 sticky z-50">
        <Navbar />
      </header>

      <main className={`relative mx-auto max-w-7xl py-6 break-words ${contentHeight}`}>
        <div className="w-100 h-full flex flex-col overflow-scroll">
          <header className="px-2">
            <h1 className="text-center">
              <H5>the best learning resources for software devs</H5>
            </h1>
            <p className="flex flex-row justify-center items-center">
              <H5 color={theme.colors.primary.DEFAULT}>26,344</H5>
              <span className="ml-2">
                <Body1>links and counting!</Body1>
              </span>
            </p>
          </header>
          {/* Categories */}
          <div className="flex-1 bg-secondary-light5"></div>
        </div>
      </main>

      <footer className="fixed inset-x-0 bottom-0 w-100">
        <Footer />
      </footer>
    </div>
  );
}
