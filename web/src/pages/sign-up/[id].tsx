"use server";

import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Box } from "@mui/material";
import { Header } from "@/components/Header/Header";
import { PageHeading } from "@/components/PageHeading/PageHeading";
import { FooterSimple } from "@/components/FooterSimple/FooterSimple";
import { SignUpForm } from "./_components/SignUpForm";
import { useSnackbar } from "@/lib/hooks/snackbar.hook";
import { TSignUpFormData } from "./_schema/SignUpFormSchema";
import { handleSubmitApplicant } from "./_actions";

export default function SignUp() {
  const router = useRouter();
  const { showSnackbar } = useSnackbar();

  const submitApplicantMutation = useMutation({
    mutationFn: handleSubmitApplicant,
  });

  const handleSubmit = (data: TSignUpFormData) => {
    return submitApplicantMutation.mutateAsync(data);
  };

  useEffect(
    () => {
      if (submitApplicantMutation.isSuccess) {
        showSnackbar("success", "Cadastro realizado com sucesso!");
        router.push({ pathname: "/" });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [submitApplicantMutation.isSuccess]
  );

  useEffect(
    () => {
      if (submitApplicantMutation.isError) {
        showSnackbar("error", "Houve um erro ao realizar o cadastro!");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [submitApplicantMutation.isError]
  );

  return (
    <main>
      <PageHeading title="Queremos saber um pouco mais sobre você" />

      <Box
        className="vw-adjustable"
        pt={{ xs: 6, md: 8 }}
        pb={{ xs: 10, md: 14 }}
      >
        <SignUpForm
          onSubmit={handleSubmit}
          offerId={Number(router.query.id)}
          isPending={submitApplicantMutation.isPending}
          isSuccess={submitApplicantMutation.isSuccess}
        />
      </Box>
    </main>
  );
}

SignUp.getLayout = (page: React.ReactElement) => (
  <>
    <Head>
      <title>Estácio</title>
    </Head>

    <Header />
    {page}
    <FooterSimple />
  </>
);
