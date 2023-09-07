import { ReactNode } from "react";
import { Control, FieldValues, UseFormSetValue } from "react-hook-form";
import { IconType } from "react-icons";

export interface AuthInputProps {
  type: string;
  placholder: string;
  id: string;
  icon: any;
  error: any;
  name: string;
  control: Control<FieldValues | any>;

  defaultValue?: string;
  disabled?: boolean;
  isPassword?: boolean;
  children?: ReactNode;
  readonly?: boolean;

  onClick?: () => void;
}

export interface AuthSocicalButtonProps {
  icon: IconType;
  onClick: () => void;
  title: string;
}

export interface TogglePasswordProps {
  isToggle: boolean;
  onClick: () => void;
}

export interface CalendarProps {
  control: Control<FieldValues | any>;
  name: string;
  setValue: UseFormSetValue<FieldValues>;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
  handleSave?: () => void;
  handleCancel?: () => void;
  defaultDate: any;
}

export interface AuthRadioProps {
  control: Control<FieldValues>;
  name: string;
  value: string;
  defaultValue?: string;
  defaultChecked?: boolean;
}
