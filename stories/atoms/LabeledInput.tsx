import React, { ChangeEvent, ReactNode } from "react";

export type LabeledInputProperties = {
  readonly id?: string;
  readonly icon?: ReactNode;
  readonly placeholder?: string;
  readonly name?: string;
  readonly type?: string;
  readonly value?: string;
  readonly autoComplete?: string;
  readonly className?: string;
  readonly error?: string | readonly string[] | null;
  readonly children?: ReactNode;
  readonly required?: boolean;
  readonly onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  readonly onFocus?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const LabeledInput = ({
  id,
  icon,
  placeholder,
  type = "text",
  autoComplete,
  error,
  className = "",
  children,
  value = "",
  required,
  onChange,
  onFocus,
}: LabeledInputProperties): JSX.Element => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 w-80 xl:w-52 relative">
          {error && <span className="font-medium text-md py-2 text-red-500">{error}</span>}
          {children ? (
            children
          ) : (
            <input
              data-testid={id}
              id={id}
              name={id}
              type={type}
              placeholder={placeholder}
              onChange={onChange}
              onFocus={onFocus}
              value={value}
              autoComplete={autoComplete}
              required={required}
              className={`${
                className ? className : ""
              } block w-full text-gray-700 bg-white sm:text-sm border-transparent h-10 rounded-md bg-transparent  ${
                error ? "border-red-500 " : ""
              }`}
            />
          )}
          {icon && !error && (
            <div className="absolute top-2.5 right-0 pr-3 flex items-center pointer-events-none">
              {icon}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
