import React from "react";

import { IconHidePass, IconShowPass } from "~/icon/Icon";
import { TogglePasswordProps } from "~/interface/AuthInterface";

const TogglePassword: React.FC<TogglePasswordProps> = ({
  isToggle,
  onClick,
}) => {
  if (isToggle) return <IconShowPass onClick={onClick} />;
  return <IconHidePass onClick={onClick} />;
};

export default TogglePassword;
