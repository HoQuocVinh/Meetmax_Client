import { Control, FieldValues } from "react-hook-form";

export interface CreatePostProps {
  open: boolean;
  // onShowModal: Function;
  onChangeStatus: Function;
  refStatus?: any;
}

export interface SearchFellingProps {
  placeholder: string;
  value: string;
  onChange?: any;
}

export interface StatusMediaProps {
  control: Control<FieldValues>;
}
