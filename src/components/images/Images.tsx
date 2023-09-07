import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { AvtProps } from "~/interface/ImageInterface";
import classNames from "~/utils/classNames";

const Images = ({ children }: { children: ReactNode }) => {
  return { children };
};

Images.Avt = ({ width, height, src, alt }: AvtProps) => {
  return (
    <div
      className={classNames(
        "rounded-full",
        width ? width : "w-[42px]",
        height ? height : "h-[42px]"
      )}
    >
      <img src={src} alt={alt} className="h-full w-full rounded-full" />
    </div>
  );
};

Images.Logo = () => {
  return (
    <NavLink to="/">
      <img
        srcSet="/images/logo.png 2x"
        alt="Logo"
        style={{ cursor: "pointer" }}
      />
    </NavLink>
  );
};

export default Images;
