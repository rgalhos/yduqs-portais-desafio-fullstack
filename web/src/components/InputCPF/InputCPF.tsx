import { forwardRef } from "react";
import { IMaskInput } from "react-imask";
import {
  FormControl,
  InputLabel,
  InputProps,
  OutlinedInput,
} from "@mui/material";

export interface IInputCPFProps {
  label: string;
}

interface IMaskedInputProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const MaskedInputCPF = forwardRef<HTMLInputElement, IMaskedInputProps>(
  function MaskedInputCPF(props, ref) {
    const { onChange, ...other } = props;

    return (
      <IMaskInput
        {...other}
        mask="000.000.000-00"
        inputRef={ref}
        onAccept={(value) =>
          onChange?.({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

export const InputCPF = ({ label, ...props }: IInputCPFProps & InputProps) => {
  return (
    <FormControl>
      <InputLabel htmlFor="cpf">{label}</InputLabel>
      <OutlinedInput
        id="cpf"
        label={label}
        {...props}
        // @ts-expect-error Incompatible type
        inputComponent={MaskedInputCPF}
      />
    </FormControl>
  );
};
