import { Links, Meta, Scripts } from "@remix-run/react";

import { CONTENT_HEIGHT } from "@app/utils/globalConsts";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Body1, Title2, Title3, Title4, Title5 } from "../Typography";
import { RootBoundaryProps } from "./types";

const RootBoundary = ({ title, heading, image, message }: RootBoundaryProps) => (
  <html lang="en" className="h-full">
    <head>
      <title>{title}</title>
      <Meta />
      <Links />
    </head>
    <body className="h-full">
      <div className="relative min-h-screen bg-background">
        <header className="inset-x-0 top-0 sticky z-50">
          <Navbar isNavigational={false} />
        </header>

        <div className={`relative mx-auto max-w-7xl py-6 break-words ${CONTENT_HEIGHT}`}>
          <div className="w-100 h-full flex flex-col overflow-scroll">
            <header className="text-center flex-1 flex items-end justify-center px-2">
              <h1>
                <div className="hidden laptop:block">
                  <Title2>{heading}</Title2>
                </div>
                <div className="hidden tablet:block laptop:hidden">
                  <Title3>{heading}</Title3>
                </div>
                <div className="tablet:hidden">
                  <Title5>{heading}</Title5>
                </div>
              </h1>
            </header>

            <div className="flex-1 flex items-center justify-center px-8">
              <img src={image} alt={heading} />
            </div>

            <div className="text-center flex-1 flex items-start justify-center px-2">
              <p className="hidden laptop:block">
                <Title4>{message}</Title4>
              </p>
              <p className="hidden tablet:block laptop:hidden">
                <Title5>{message}</Title5>
              </p>
              <p className="tablet:hidden">
                <Body1>{message}</Body1>
              </p>
            </div>
          </div>
        </div>

        <footer className="fixed inset-x-0 bottom-0 w-100">
          <Footer />
        </footer>
      </div>
      <Scripts />
    </body>
  </html>
);

export default RootBoundary;
