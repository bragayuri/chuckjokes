import React, { ChangeEvent } from "react";
import { Loader } from "stories/atoms/Loader";

import { Button, ButtonSize } from "../atoms/Button";
import { LabeledInput } from "../atoms/LabeledInput";

export type BasicFormProperties = {
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  readonly onSubmit: () => void;
  readonly formValue: string;
  readonly loading: boolean;
  readonly error: string;
  readonly labels?: {
    readonly search: string;
    readonly placeholder: string;
    readonly title: string;
  };
};

export const BasicForm: React.FC<BasicFormProperties> = ({
  onChange,
  onSubmit,
  labels,
  formValue,
  error,
  loading,
}) => {
  return (
    <div>
      <form className="flex flex-col bg-gray-100 rounded-md p-6">
        <div className="space-y-2 flex flex-col justify-center items-center w-full">
          <span className="text-bold text-3xl p-10">{labels?.title}</span>
          <div className="py-2">
            <LabeledInput id="search" onChange={onChange} value={formValue} error={error} />
          </div>
          <div className="py-2">
            <Button color="green" size={ButtonSize.LARGE} id="search-btn" onClick={onSubmit}>
              {loading ? <Loader /> : labels?.search}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
