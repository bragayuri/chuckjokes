import React, { useState } from "react";
import { useAppState } from "src/lib/context";
import i18n from "src/lib/i18n";
import FlagMenu from "stories/molecules/FlagMenu";
import { MobileMenuClosed } from "stories/molecules/MobileMenuClosed";
import { NavBarItem } from "stories/molecules/NavBarItem";
import { MobileNavBar } from "stories/organisms/MobileNavBar";
import { NavBar } from "stories/organisms/NavBar";

export enum NavSession {
  HOME = "HOME",
  DAILY_JOKES = "DAILY",
  ABOUT = "ABOUT",
  CATEGORIES = "CATEGORIES",
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
    label: i18n.t("navbar.home"),
    href: "#",
    elementId: NavSession.HOME,
  },
  {
    id: 1,
    label: i18n.t("navbar.dailyJokes"),
    href: "#",
    elementId: NavSession.DAILY_JOKES,
  },
  {
    id: 2,
    label: i18n.t("navbar.about"),
    href: "#",
    elementId: NavSession.ABOUT,
  },
  {
    id: 3,
    label: i18n.t("navbar.categories"),
    href: "#",
    elementId: NavSession.CATEGORIES,
  },
];

const NavBarComponent = (): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const { setLanguage } = useAppState();

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

  const flagProperties = [
    {
      id: "en",
      img: {
        imgURL: "/uk-flag.png",
        imgAlt: "UK-flag",
        imgId: "en",
      },
      setLanguage: () => setLanguage("en"),
    },
    {
      id: "pt",
      img: {
        imgURL: "/br-flag.png",
        imgAlt: "br-flag",
        imgId: "pt",
      },
      setLanguage: () => setLanguage("pt"),
    },
    {
      id: "ar",
      img: {
        imgURL: "/ar-flag.png",
        imgAlt: "ar-flag",
        imgId: "ar",
      },
      setLanguage: () => setLanguage("ar"),
    },
  ];

  return (
    <>
      <NavBar labels={{ button: i18n.t("navbar.inspire") }}>
        <FlagMenu flagProperties={flagProperties} />
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
          labels={{ close: "Close Navbar", button: i18n.t("navbar.inspire") }}
          onClose={() => setIsActive(!isActive)}>
          <FlagMenu flagProperties={flagProperties} />
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
