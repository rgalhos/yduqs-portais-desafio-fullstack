import { forwardRef } from "react";
import { IMaskInput } from "react-imask";
import {
  FormControl,
  InputLabel,
  InputProps,
  OutlinedInput,
} from "@mui/material";

export interface IInputDateProps {
  label: string;
}

interface IMaskedInputProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const MaskedInputDate = forwardRef<HTMLInputElement, IMaskedInputProps>(
  function MaskedInputDate(props, ref) {
    const { onChange, ...other } = props;

    return (
      // @ts-expect-error Missing type
      <IMaskInput
        {...other}
        mask={Date}
        pattern="d{/}`m{/}`Y"
        format={(date: Date) => {
          if (!date) return "";

          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const year = date.getFullYear();

          return [day, month, year].join("/");
        }}
        parse={(str): Date => {
          const date = str.split("/").map(Number);
          const day = date[0];
          const month = date[1];
          const year = date[2];

          return new Date(year, month - 1, day);
        }}
        inputRef={ref}
        onAccept={(value) =>
          onChange?.({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

export const InputDate = ({
  label,
  ...props
}: IInputDateProps & InputProps) => {
  return (
    <FormControl>
      <InputLabel htmlFor="date">{label}</InputLabel>
      <OutlinedInput
        id="date"
        label={label}
        {...props}
        // @ts-expect-error Incompatible type
        inputComponent={MaskedInputDate}
      />
    </FormControl>
  );
};
