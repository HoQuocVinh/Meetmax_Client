import { FieldRadioProps } from "~/interface/CoomonInterface";
import AuthRadio from "../auth/AuthRadio";

const FieldRadio: React.FC<FieldRadioProps> = ({
  onClick = () => {},
  children,
  ...props
}) => {
  return (
    <label
      className="flex cursor-pointer select-none items-center gap-x-3 "
      onClick={onClick}
    >
      <AuthRadio {...props} />
      <span
        className="visible-item text-ct-gray text-opacity-60"
        data-value={children}
      >
        {children}
      </span>
    </label>
  );
};

export default FieldRadio;
