import { FormControl, FormHelperText } from "@mui/material";
import { FieldError } from "react-hook-form";

export interface IInputControlProps {
  error?: false | FieldError;
  render: React.ReactNode;
}

export const InputControl = ({ error, render }: IInputControlProps) => {
  return (
    <FormControl error={!!error}>
      {render}
      {!!error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
};
