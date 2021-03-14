/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable unicorn/prevent-abbreviations */
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { getCategories } from "src/backend/categoryObject";
import { getRandomObject } from "src/backend/randomObject";
import { Category, RandomObject } from "stories/lib/types";

import i18n from "./i18n";
import safeLocalStorage from "./safeLocalStorage";

type AppState = {
  readonly categories?: readonly Category[];
  readonly setCategories?: (value: readonly Category[]) => void;
  readonly randomObject?: RandomObject;
  readonly handleRandomJoke: () => void;
  readonly setLanguage: (value: string) => void;
};

export const AppContext = React.createContext<AppState>({
  categories: [],
  setCategories: () => {},
  randomObject: undefined,
  handleRandomJoke: () => {},
  setLanguage: () => {},
});

export const useAppState = (): AppState => useContext(AppContext);

const ContextProvider = ({ children }: { readonly children: ReactNode }): JSX.Element => {
  const [categories, setCategories] = useState<readonly Category[]>();
  const [randomObject, setRandomObject] = useState<RandomObject>();
  const [language, setLanguage] = useState(safeLocalStorage.getItem("language") || "en");

  useEffect(() => {
    if (language === "ar") {
      safeLocalStorage.setItem("dir", "rtl");
    } else {
      safeLocalStorage.setItem("dir", "ltr");
    }
    safeLocalStorage.setItem("language", language);

    if (i18n.locale() !== language && process.browser) {
      window.location.reload();
    }
  }, [language]);

  const handleCategories = async (): Promise<void> => {
    const response = await getCategories();
    setCategories(
      response.map((item: string, index: number) => {
        return {
          id: index,
          category: item,
        };
      }),
    );
  };

  const handleRandomJoke = async (): Promise<void> => {
    const response = await getRandomObject();
    setRandomObject(response);
  };

  useEffect(() => {
    handleCategories();
    handleRandomJoke();
  }, []);

  return (
    <AppContext.Provider
      value={{
        categories,
        setCategories,
        randomObject,
        handleRandomJoke,
        setLanguage,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
