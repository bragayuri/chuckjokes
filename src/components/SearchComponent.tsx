import React from "react";
import { useAppState } from "src/lib/context";
import { BasicForm, BasicFormProperties } from "stories/organisms/BasicForm";

type SearchComponentProperties = {
  readonly properties: BasicFormProperties;
};

const SearchComponent = ({ properties }: SearchComponentProperties): JSX.Element => {
  const { research, loading, error } = useAppState();
  return (
    <div className="bg-gray-100 rounded-xl my-20 overflow-y-scroll" id="SEARCH">
      <div className="flex flex-col-reverse xl:flex-row">
        <section className="w-full">
          <BasicForm
            loading={loading}
            formValue={properties.formValue}
            onChange={properties.onChange}
            onSubmit={properties.onSubmit}
            labels={properties.labels}
            error={properties.error}
          />
        </section>
        <aside className="w-full flex justify-center items-center my-0 py-0">
          {research?.length === 0 && !error ? (
            <img
              className="object-contain w-96 h-96 my-0 py-0 xl:h-auto xl:w-auto xl:max-w-full"
              src="/logo-form.png"
              alt="main-logo"
            />
          ) : (
            <div className="p-5 bg-gray-200 h-96 overflow-y-scroll">
              {research?.map((item) => (
                <div className="bg-gray-100 p-2 m-2" key={item.id}>
                  <span className="text-black">{item.value}</span>
                </div>
              ))}
            </div>
          )}
          {error && (
            <div className="bg-gray-100 p-2 m-2">
              <span className="text-red-500 flex justify-center items-center">{error}</span>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default SearchComponent;
