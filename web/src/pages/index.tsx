import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { Box } from "@mui/material";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { PageHeading } from "@/components/PageHeading/PageHeading";
import { OfferOptionsContainer } from "./_components/OfferOptionsContainer";
import { IOffer } from "@/shared/interfaces/offer.interface";
import { client } from "@/lib/api";

export const getServerSideProps = async () => {
  const res = await client.get("/offer");
  const offers = res.data.items as IOffer[];

  return { props: { offers } };
};

export default function Home({
  offers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <PageHeading
        title="Vamos começar, escolha as opções do seu curso"
        subtitle="Use os filtros para saber o preço do seu curso e fazer sua inscrição. "
      />

      <Box component="main" sx={{ pt: 8, pb: 14 }}>
        <OfferOptionsContainer offers={offers} />
      </Box>
    </div>
  );
}

Home.getLayout = (page: React.ReactElement) => (
  <>
    <Head>
      <title>Estácio</title>
    </Head>

    <Header />
    {page}
    <Footer />
  </>
);
