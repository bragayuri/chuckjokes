import React, { ReactNode, useContext, useEffect, useState } from "react";
import api from "src/services/api";
import { Category, RandomObject } from "stories/lib/types";

type AppState = {
  readonly categories?: readonly Category[];
  readonly setCategories?: (value: readonly Category[]) => void;
  readonly randomObject?: RandomObject;
  readonly getRandomJoke: () => void;
};

export const AppContext = React.createContext<AppState>({
  categories: [],
  setCategories: () => {},
  randomObject: undefined,
  getRandomJoke: () => {},
});

export const useAppState = (): AppState => useContext(AppContext);

const ContextProvider = ({ children }: { readonly children: ReactNode }): JSX.Element => {
  const [categories, setCategories] = useState<readonly Category[]>();
  const [randomObject, setRandomObject] = useState<RandomObject>();

  const getCategories = async (): Promise<void> => {
    api.get("/categories").then((response) => {
      setCategories(
        response.data.map((item: string, index: number) => {
          return {
            id: index,
            category: item,
          };
        }),
      );
    });
  };

  const getRandomJoke = async (): Promise<void> => {
    api.get("/random").then((response) => {
      setRandomObject(response.data);
    });
  };

  useEffect(() => {
    getCategories();
    getRandomJoke();
  }, []);

  return (
    <AppContext.Provider
      value={{
        categories,
        setCategories,
        randomObject,
        getRandomJoke,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
