"use server";

import { Box } from "@mui/material";
import { Header } from "@/components/Header/Header";
import { PageHeading } from "@/components/PageHeading/PageHeading";
import { FooterSimple } from "@/components/FooterSimple/FooterSimple";
import { SignUpForm } from "./_components/SignUpForm";
import Head from "next/head";
import { handleSubmitApplicant } from "./_actions";
export default function SignUp() {
  return (
    <main>
      <PageHeading title="Queremos saber um pouco mais sobre você" />

      <Box
        className="vw-adjustable"
        pt={{ xs: 6, md: 8 }}
        pb={{ xs: 10, md: 14 }}
      >
        <SignUpForm onSubmit={handleSubmitApplicant} />
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
