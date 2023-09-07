import { Control, FieldValues } from "react-hook-form";

type CommonProps = {
  control: Control<FieldValues | any>;
};

export interface DisplayPermissionGroupProps extends CommonProps {}

export interface RenderPermissionGroupProps extends CommonProps {
  data: Array<string>;
  onClick?: (e: any) => void;
}
