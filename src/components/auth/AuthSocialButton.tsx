"use client";

import React from "react";
import { AuthSocicalButtonProps } from "~/interface/AuthInterface";

const AuthSocicalButton: React.FC<AuthSocicalButtonProps> = ({
  icon: Icon,
  onClick,
  title,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-3 w-full justify-center rounded-md bg-white px-5 py-4 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
    >
      <Icon />
      <span className="leading-none">{title}</span>
    </button>
  );
};

export default AuthSocicalButton;
