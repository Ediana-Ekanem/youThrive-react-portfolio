import Index from "../../home/Index";
import Skills from "../../skills/Skills";
import Portfolio from "../../portfolio/Porfolio";
import Contact from "../../contact/Contact";

let id = 0;
export const AppRoutes = [
  {
    id: id++,
    path: "/",
    component: <Index />,
    navName: "About Me",
  },

  {
    id: id++,
    path: "/skills",
    component: <Skills />,
    navName: "Skills",
  },
  {
    id: id++,
    path: "/portfolio",
    component: <Portfolio />,
    navName: "Portfolio",
  },
  {
    id: id++,
    path: "/contact",
    component: <Contact />,
    navName: "Contact",
  },
];
