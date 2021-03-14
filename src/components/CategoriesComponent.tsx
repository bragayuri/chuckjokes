import React, { useEffect, useState } from "react";
import { getByCategory } from "src/backend/categoryObject";
import { useAppState } from "src/lib/context";
import { CategoryObject, RandomObject } from "stories/lib/types";
import { capitalizeFirstLetter } from "stories/lib/utils";
import { ButtonGrid, GridButton } from "stories/organisms/ButtonGrid";

const CategoriesComponent = (): JSX.Element => {
  const { categories } = useAppState();
  const [buttonProperties, setButtonProperties] = useState<readonly GridButton[]>();
  const [activeCategory, setActiveCategory] = useState("");
  const [categoryObject, setCategoryObject] = useState<CategoryObject>({
    id: "",
    value: "",
    category: "",
  });

  const handleCategory = async (): Promise<string> => {
    const result: RandomObject = await getByCategory(activeCategory);
    setCategoryObject({
      id: result.id,
      value: result.value,
      category: result.categories[0],
    });

    return result.value;
  };

  useEffect(() => {
    if (categories) {
      setButtonProperties(
        categories.map((item) => ({
          id: String(item.id),
          label: item.category,
          onClick: () => {
            setActiveCategory(item.category);
          },
          color: "yellow",
        })),
      );
    }
  }, [categories]);

  useEffect(() => {
    if (activeCategory !== "") {
      handleCategory();
      setActiveCategory("");
    }
  }, [activeCategory]);

  return (
    <div className="flex flex-col-reverse xl:flex-row pb-20">
      <div className="flex-1 flex justify-center items-center">
        <ButtonGrid buttonProps={buttonProperties} />
      </div>
      <div
        style={{
          borderRadius: "62% 38% 82% 18% / 61% 59% 41% 39% ",
        }}
        className="bg-gray-100 max-w-xl flex-1 flex flex-col ms-0  md:ms-80 xl:ms-0 py-24 xl:py-24 items-center">
        {categoryObject.category ? (
          <div className="font-bold text-3xl text-black pb-4">{`Facts by Category - ${capitalizeFirstLetter(
            categoryObject.category,
          )}`}</div>
        ) : (
          <div className="font-bold text-3xl text-black pb-4">Pick a Category</div>
        )}
        <div className="flex flex-col justify-items-auto items-center mx-10 max-w-md">
          <div className="xl:px-20 pb-16 xl:pb-20  text-xl text-black">{categoryObject.value}</div>
          {!categoryObject.value && (
            <img className="object-fit w-48" src="/chucknorris-logo-2.png" alt="chuck-norris" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesComponent;
