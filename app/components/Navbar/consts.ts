import { Heart, Lightbulb, Scroll } from "@app/assets/icons";

import { Navlink } from "./types";

export const LINKS: Array<Navlink> = [
  { path: "/about", text: "About", icon: Scroll },
  { path: "/donate", text: "Donate", icon: Heart },
  { path: "/submission", text: "Submission", icon: Lightbulb },
];
