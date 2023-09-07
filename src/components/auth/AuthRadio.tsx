import React from "react";
import { useController } from "react-hook-form";
import { AuthRadioProps } from "~/interface/AuthInterface";

const AuthRadio: React.FC<AuthRadioProps> = ({
  control,
  name,
  defaultValue,
  ...rest
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue,
  });

  return (
    <div className="custom-radio h-4 w-4 cursor-pointer">
      <input type="radio" className="hidden" {...field} {...rest} />
      <div className="h-full w-full rounded-full bg-white"></div>
    </div>
  );
};

export default AuthRadio;
