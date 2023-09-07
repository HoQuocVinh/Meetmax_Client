import React from "react";

import { useController } from "react-hook-form";
import { AuthInputProps } from "~/interface/AuthInterface";
import classNames from "~/utils/classNames";

const AuthInput: React.FC<AuthInputProps> = ({
  control,
  name,
  defaultValue,
  icon,
  placholder,
  type,
  error,
  id,
  disabled,
  children,
  isPassword,
  readonly,
  onClick,
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue,
  });
  return (
    <div onClick={onClick}>
      <div
        className={classNames(
          "relative flex items-center px-5 py-3 gap-3 rounded-md ring-1 ring-inset ring-ct-gray ring-opacity-20 focus-within:ring-2 focus-within:ring-inset shadow-sm",
          error?.length
            ? "ring-2 ring-rose-500 ring-opacity-80"
            : "focus-within:ring-sky-500"
        )}
      >
        {icon}
        <input
          type={type}
          id={id}
          autoComplete={id}
          disabled={disabled}
          placeholder={placholder}
          maxLength={isPassword ? 50 : 200}
          readOnly={readonly}
          className={classNames(
            "w-full sm:leading-6 text-gray-700 placeholder:font-medium focus:bg-transparent bg-transparent",
            disabled && "cursor-default opacity-50"
          )}
          {...field}
        />
        {children}
      </div>
      <p className="text-left text-ct-red mt-1">
        {error?.length > 0 && error}
      </p>
    </div>
  );
};

export default AuthInput;
