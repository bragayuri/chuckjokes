import React, { ReactNode, useContext, useEffect, useState } from "react";
import { getCategories } from "src/backend/categoryObject";
import { getRandomObject } from "src/backend/randomObject";
import { Category, RandomObject } from "stories/lib/types";

type AppState = {
  readonly categories?: readonly Category[];
  readonly setCategories?: (value: readonly Category[]) => void;
  readonly randomObject?: RandomObject;
  readonly handleRandomJoke: () => void;
};

export const AppContext = React.createContext<AppState>({
  categories: [],
  setCategories: () => {},
  randomObject: undefined,
  handleRandomJoke: () => {},
});

export const useAppState = (): AppState => useContext(AppContext);

const ContextProvider = ({ children }: { readonly children: ReactNode }): JSX.Element => {
  const [categories, setCategories] = useState<readonly Category[]>();
  const [randomObject, setRandomObject] = useState<RandomObject>();

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
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
