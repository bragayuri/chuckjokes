/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable unicorn/prevent-abbreviations */
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { getCategories, getFactsByText } from "src/backend/categoryObject";
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
  readonly searchForFacts: (value: string) => void;
  readonly research?: readonly RandomObject[];
  readonly loading: boolean;
  readonly error: string;
};

export const AppContext = React.createContext<AppState>({
  categories: [],
  setCategories: () => {},
  randomObject: undefined,
  handleRandomJoke: () => {},
  setLanguage: () => {},
  searchForFacts: () => {},
  research: [],
  loading: false,
  error: "",
});

export const useAppState = (): AppState => useContext(AppContext);

const ContextProvider = ({ children }: { readonly children: ReactNode }): JSX.Element => {
  const [categories, setCategories] = useState<readonly Category[]>();
  const [randomObject, setRandomObject] = useState<RandomObject>();
  const [language, setLanguage] = useState(safeLocalStorage.getItem("language") || "en");
  const [research, setResearch] = useState<readonly RandomObject[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    setLoading(true);
    const response = await getCategories();
    setCategories(
      response.map((item: string, index: number) => {
        return {
          id: index,
          category: item,
        };
      }),
    );
    setLoading(false);
  };

  const searchForFacts = async (value: string): Promise<void> => {
    setLoading(true);
    const response = await getFactsByText(value);
    console.log(response);
    if (response.total === 0) {
      setError("Chuck Norris found you are a serious Joke! Nothing was found!");
    }
    setResearch(response.result);
    setLoading(false);
  };

  const handleRandomJoke = async (): Promise<void> => {
    setLoading(true);
    const response = await getRandomObject();
    setRandomObject(response);
    setLoading(false);
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
        searchForFacts,
        research,
        loading,
        error,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
