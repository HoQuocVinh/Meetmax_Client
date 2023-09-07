import { ReactElement, ReactNode } from "react";

type CommonProps = {
  onClick?: () => void;
  children?: ReactNode;
};

export interface ButtonAuthProps extends CommonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  secondary?: boolean;
  danger?: boolean;
  text?: boolean;
  disabled?: boolean;
  form?: string;
}

export interface ButtonDefaultProps extends CommonProps {
  variant: "normal" | "outline" | "text";
  btnBackground: "blue" | "green" | "transparent";
  className?: string;
  icon?: ReactElement;
}

export interface ButtonImageProps extends CommonProps {
  icon: any;
}

export interface ButtonFellingProps extends CommonProps{
  image: string;
}
