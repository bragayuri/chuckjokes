import React, { useState } from "react";
import { MobileMenuClosed } from "stories/molecules/MobileMenuClosed";
import { NavBarItem } from "stories/molecules/NavBarItem";
import { MobileNavBar } from "stories/organisms/MobileNavBar";
import { NavBar } from "stories/organisms/NavBar";

enum NavSession {
  HOME = "HOME",
  ABOUT = "ABOUT",
  JOKES = "JOKES",
  CATEGORIES = "CATEGORIES",
  SEARCH = "SEARCH",
}

type NavOptions = {
  readonly id: number;
  readonly label: string;
  readonly href: string;
  readonly elementId: NavSession;
};

const navOptions: readonly NavOptions[] = [
  {
    id: 0,
    label: "Home",
    href: "#",
    elementId: NavSession.HOME,
  },
  {
    id: 1,
    label: "About",
    href: "#",
    elementId: NavSession.ABOUT,
  },
  {
    id: 2,
    label: "Jokes",
    href: "#",
    elementId: NavSession.JOKES,
  },
  {
    id: 3,
    label: "Categories",
    href: "#",
    elementId: NavSession.CATEGORIES,
  },
  {
    id: 4,
    label: "Search",
    href: "#",
    elementId: NavSession.SEARCH,
  },
];

const NavBarComponent = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const handleScroll = (elementId: string): boolean => {
    // eslint-disable-next-line unicorn/prefer-query-selector
    const element = document.getElementById(elementId) as any;
    setActiveId(elementId.toUpperCase());

    window.scrollTo({
      behavior: element ? "smooth" : "auto",
      top: element ? element.offsetTop - 70 : 0,
    });

    return false;
  };

  return (
    <>
      <NavBar labels={{ button: "Insipre Yourself" }}>
        {navOptions.map((item) => (
          <div key={item.id}>
            <NavBarItem
              handleScroll={handleScroll}
              isActive={activeId === item.elementId}
              label={item.label}
              elementId={item.elementId}
            />
          </div>
        ))}
      </NavBar>
      <MobileMenuClosed labels={{ open: "Open Navbar" }} onClick={() => setIsActive(!isActive)} />
      {isActive && (
        <MobileNavBar
          labels={{ close: "Close Navbar", button: "Inspire yourself" }}
          onClose={() => setIsActive(!isActive)}>
          {navOptions.map((item) => (
            <div key={item.id}>
              <NavBarItem
                handleScroll={handleScroll}
                label={item.label}
                isActive={activeId === item.elementId}
                elementId={item.elementId}
              />
            </div>
          ))}
        </MobileNavBar>
      )}
    </>
  );
};

export default NavBarComponent;