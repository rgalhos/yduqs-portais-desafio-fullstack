import { forwardRef, useState } from "react";
import { IMaskInput } from "react-imask";
import {
  FormControl,
  InputLabel,
  InputProps,
  OutlinedInput,
} from "@mui/material";

export interface IInputPhoneProps {
  label: string;
}

const EIGHT_DIGIT_MASK = "(00) 0000-00000";
const NINE_DIGIT_MASK = "(00) 00000-0000";

interface IMaskedInputProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const MaskedInputPhone = forwardRef<HTMLInputElement, IMaskedInputProps>(
  function MaskedInputPhone(props, ref) {
    const { onChange, ...other } = props;
    const [mask, setMask] = useState(EIGHT_DIGIT_MASK);

    const handleOnChange = (event: {
      target: { name: string; value: string };
    }) => {
      if (event.target.value.length === 11) {
        setMask(NINE_DIGIT_MASK);
      } else {
        setMask(EIGHT_DIGIT_MASK);
      }

      onChange?.({
        target: {
          name: event.target.name,
          value: event.target.value,
        },
      });
    };

    return (
      <IMaskInput
        {...other}
        mask={mask}
        inputRef={ref}
        onAccept={(value) =>
          handleOnChange({ target: { name: props.name as string, value } })
        }
        unmask
        overwrite
      />
    );
  }
);

export const InputPhone = ({
  label,
  ...props
}: IInputPhoneProps & InputProps) => {
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        label={label}
        {...props}
        // @ts-expect-error Incompatible type
        inputComponent={MaskedInputPhone}
      />
    </FormControl>
  );
};
