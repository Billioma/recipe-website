import Home from "../pages/Home";
import About from "../pages/About";
import Recipe from "../pages/Recipe";
import Contact from "../pages/Contact";

export const route = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "Home",
    component: About,
  },
  {
    path: "/recipes-list",
    name: "Recipes",
    component: Recipe,
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: Contact,
  },
];
