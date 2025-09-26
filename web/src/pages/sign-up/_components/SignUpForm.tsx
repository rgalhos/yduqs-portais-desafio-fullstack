"use client";

import { useState } from "react";
import { FieldError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Stack,
  TextField,
} from "@mui/material";
import { InputPhone } from "@/components/InputPhone/InputPhone";
import { InputDate } from "@/components/InputDate/InputDate";
import { InputCPF } from "@/components/InputCPF/InputCPF";
import { InputControl } from "@/components/InputControl/InputControl";
import { signupFormSchema, TSignUpFormData } from "../_schema/SignUpFormSchema";

export interface ISignUpFormProps {
  onSubmit: (data: TSignUpFormData) => void;
}

export const SignUpForm = ({ onSubmit }: ISignUpFormProps) => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(signupFormSchema),
  });

  return (
    <Box component="form" maxWidth={660} onSubmit={handleSubmit(onSubmit)}>
      <Stack display="flex" flexDirection="column" gap={6}>
        <FormControl>
          <InputControl
            error={errors.fullName}
            render={
              <TextField
                label="Nome completo"
                variant="outlined"
                fullWidth
                {...register("fullName")}
              />
            }
          />
          <FormHelperText>
            Preencha seu nome completo, sem abreviações, igual ao seu documento
            de identificação. <u>Confira o exemplo.</u>
          </FormHelperText>
        </FormControl>

        <InputControl
          error={errors.cpf}
          render={<InputCPF label="CPF" fullWidth {...register("cpf")} />}
        />

        <InputControl
          error={errors.birthDate as FieldError}
          render={
            <InputDate
              label="Data de nascimento"
              fullWidth
              {...register("birthDate")}
            />
          }
        />

        <InputControl
          error={errors.email}
          render={
            <TextField
              label="E-mail"
              variant="outlined"
              fullWidth
              {...register("email")}
            />
          }
        />

        <InputControl
          error={errors.phone}
          render={
            <InputPhone
              label="Celular para contato"
              fullWidth
              {...register("phone")}
            />
          }
        />

        <InputControl
          error={errors.graduationYear}
          render={
            <TextField
              label="Ano de conclusão do ensino médio"
              variant="outlined"
              fullWidth
              {...register("graduationYear")}
            />
          }
        />

        <FormControlLabel
          control={
            <Checkbox
              name="acceptTerms"
              value={acceptedTerms}
              onChange={(_e, checked) => setAcceptedTerms(checked)}
              slotProps={{
                root: {
                  sx: { alignSelf: "flex-start", pt: 0 },
                },
              }}
            />
          }
          label={
            <>
              Li e concordo com os <u>termos do edital</u>, bem como com o
              tratamento dos meus dados para fins de prospecção dos serviços
              educacionais prestados pela Estácio e demais instituições de
              ensino do mesmo <u>Grupo Econômico</u>, de acordo com a nossa{" "}
              <u>política de privacidade</u>.
            </>
          }
        />

        <FormControlLabel
          control={<Checkbox name="whatsappOptIn" />}
          label="Aceito receber atualizações sobre minha inscrição pelo WhatsApp."
          {...register("whatsappOptIn")}
        />
      </Stack>

      <Box mt={8}>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={!isValid || !acceptedTerms}
        >
          Avançar
        </Button>
      </Box>
    </Box>
  );
};
