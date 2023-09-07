import Tippy from "@tippyjs/react";
import { Fragment, ReactNode } from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

import {
  ButtonAuthProps,
  ButtonDefaultProps,
  ButtonFellingProps,
  ButtonImageProps,
} from "~/interface/ButtonInterface";
import classNames from "~/utils/classNames";

const Button = ({ children }: { children: ReactNode }) => {
  return { children };
};

Button.Auth = ({
  type = "button",
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
  text,
  form,
}: ButtonAuthProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      form={form}
      className={classNames(
        "flex h-[44px] items-center justify-center rounded-md px-5 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        disabled && "pointer-events-none cursor-default select-none opacity-50",
        fullWidth && "w-full",
        secondary && "text-gray-900",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        text && "text-ct-gray text-opacity-60 hover:text-opacity-80",
        !secondary &&
          !danger &&
          !text &&
          "bg-blue-500 text-white hover:bg-blue-600"
      )}
    >
      {disabled ? (
        <div className="h-6 w-6 animate-spin rounded-full border-[4px] border-white border-t-transparent"></div>
      ) : (
        children
      )}
    </button>
  );
};

Button.Default = (props: ButtonDefaultProps) => {
  const variantClasses = {
    normal: "text-white",
    outline: "text-ct-blue bg-white border border-blue hover:bg-[#d7e5ff]",
    text: "text-ct-gray",
  };

  const btnBackgroundClasses = {
    blue: "bg-ct-blue hover:bg-[#2c64cc]",
    green: "bg-ct-green hover:bg-[#2da26e]",
    transparent: "bg-transparent",
  };

  const customClass = classNames(
    variantClasses[props.variant],
    btnBackgroundClasses[props.btnBackground]
  );

  return (
    <button
      className={classNames(
        "transition-all active:scale-90",
        customClass,
        props.className
      )}
      onClick={props.onClick}
    >
      {props.icon ? (
        <div className="flex items-center text-sm">
          <span className="mr-[10px]">{props.icon}</span>
          {props.children}
        </div>
      ) : (
        props.children
      )}
    </button>
  );
};

Button.Image = ({ children, onClick, icon }: ButtonImageProps) => {
  return (
    <button
      className={classNames(
        "button__edit flex items-center gap-1 rounded-md bg-white px-3 py-2 text-ct-gray transition-all hover:bg-gray-200 active:scale-90"
      )}
      onClick={onClick}
    >
      <span className="text-xl"> {icon}</span> {children}
    </button>
  );
};

Button.Social = ({
  children,
  image,
  onClick,
  tooltip,
}: {
  children?: ReactNode;
  image: string;
  onClick: () => void;
  tooltip?: string;
}) => {
  return (
    <Fragment>
      {children ? (
        <button
          className={classNames(
            "flex items-center justify-center gap-2 text-sm text-ct-gray transition-all hover:bg-gray-100 active:scale-90",
            children ? "rounded-md px-6 py-2" : "rounded-full p-2"
          )}
          onClick={onClick}
        >
          <img src={image} alt="" style={{ height: "24px" }} />
          {children && <span className="mt-0.5">{children}</span>}
        </button>
      ) : (
        <Tippy content={!children ? tooltip : ""}>
          <button
            className={classNames(
              "flex items-center justify-center gap-2 text-sm text-ct-gray transition-all hover:bg-gray-100 active:scale-90",
              children ? "rounded-md px-6 py-2" : "rounded-full p-2"
            )}
            onClick={onClick}
          >
            <img src={image} alt="" style={{ height: "24px" }} />
            {children && <span className="mt-0.5">{children}</span>}
          </button>
        </Tippy>
      )}
    </Fragment>
  );
};

Button.Close = ({ onClick, type }: { onClick?: () => void; type?: string }) => {
  let clx = "";
  switch (type) {
    case "outline":
      clx +=
        "border border-ct-gray border-opacity-20 bg-white hover:bg-gray-100";
      break;
    default:
      break;
  }

  return (
    <button
      className={classNames(
        "ml-[18px] cursor-pointer rounded-full  p-1.5 text-lg text-gray-700 transition-all",
        type ? clx : "bg-gray-100 hover:bg-gray-200"
      )}
      onClick={onClick}
    >
      <IoMdClose />
    </button>
  );
};

Button.Back = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="flex items-center justify-center rounded-full bg-gray-100 p-2 text-xl text-black text-opacity-60 transition-all hover:bg-gray-200 active:scale-90"
      type="button"
      onClick={onClick}
    >
      <BiArrowBack />
    </button>
  );
};

Button.Felling = ({ onClick, image, children }: ButtonFellingProps) => {
  return (
    <button onClick={onClick} className="button__icon">
      <div className="rounded-full bg-[#E4E6EB] p-1.5 text-lg leading-none">
        <img src={image} alt="" className="h-5 w-5" />
      </div>
      <span className="text-sm text-black text-opacity-80">{children}</span>
    </button>
  );
};

export default Button;
