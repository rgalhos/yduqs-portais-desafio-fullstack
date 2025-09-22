"use client";

import Image from "next/image";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";
import {
  Box,
  Divider,
  Grid,
  Stack,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FooterNavColumn } from "@/components/FooterNavColumn/FooterNavColumn";
import { FooterNavAccordion } from "@/components/FooterNavAccordion/FooterNavAccordion";
import { FooterContactInfo } from "@/components/FooterContactInfo/FooterContactInfo";
import EstacioLogoWhite from "@public/estacio-logo-white.svg";
import ContactWhatsapp from "@public/contact-whatsapp.svg";
import ContactPhone from "@public/contact-phone.svg";
import EMecQRCode from "@public/e-mec-qr-code.svg";

const navigationItems = [
  {
    title: "A Estácio",
    items: [
      { label: "Sobre a Estácio", href: "#" },
      { label: "Unidades", href: "#" },
      { label: "Sustentabilidade", href: "#" },
      { label: "Regulamentos", href: "#" },
      { label: "Instituições de Ensino", href: "#" },
      { label: "Trabalhe na Estácio", href: "#" },
      { label: "Convênios com Empresas", href: "#" },
      { label: "Seja Parceiro", href: "#" },
      { label: "Seja Fornecedor", href: "#" },
      { label: "Imprensa", href: "#" },
    ],
  },
  {
    title: "Estude na Estácio",
    items: [
      { label: "Por que nossa graduação?", href: "#" },
      { label: "Por que nossa pós?", href: "#" },
      { label: "Bolsas e financiamentos", href: "#" },
      { label: "Carreiras", href: "#" },
      { label: "Modelos de Ensino", href: "#" },
      { label: "Formas de ingresso", href: "#" },
      { label: "DIS", href: "#" },
      { label: "Internacionalização", href: "#" },
      { label: "Clube do aluno", href: "#" },
      { label: "Informações e-MEC", href: "#" },
    ],
  },
  {
    title: "Cursos",
    items: [
      { label: "Graduação", href: "#" },
      { label: "Pós graduação", href: "#" },
      { label: "Cursos Livres", href: "#" },
      { label: "Carreiras", href: "#" },
    ],
  },
  {
    title: "Inscreva-se",
    items: [
      { label: "Vestibular", href: "#" },
      { label: "Enem", href: "#" },
      { label: "Transferência", href: "#" },
      { label: "Pós-Graduação", href: "#" },
      { label: "Mestrado e Doutorado", href: "#" },
      { label: "Cursos livres", href: "#" },
    ],
  },
  {
    title: "Área do aluno",
    items: [
      { label: "Acessar área do aluno", href: "#" },
      { label: "Aplicativo na App Store", href: "#" },
      { label: "Aplicativo na Google Play", href: "#" },
    ],
  },
  {
    title: "Para começar",
    items: [
      { label: "Dicas de Estudo", href: "#" },
      { label: "Ensino Digital", href: "#" },
      { label: "Mercado de Trabalho", href: "#" },
      { label: "Sou calouro", href: "#" },
      { label: "Por que Estácio?", href: "#" },
    ],
  },
  {
    title: "Redes sociais",
    items: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Linkedin", href: "#" },
      { label: "Youtube", href: "#" },
    ],
  },
  {
    title: "Fale com a gente",
    items: [
      { label: "Atendimento", href: "#" },
      { label: "Ouvidoria", href: "#" },
    ],
  },
];

const FooterContainer = styled("footer")(({ theme }) => ({
  position: "static",
  background: theme.palette.primary.dark,
  color: "var(--foreground-light)",

  "& .contact-info": {
    display: "flex",
    flexDirection: "row",
    fontWeight: 600,
    gap: theme.spacing(14),

    "& .contact-info-item": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing(3),
    },
  },

  "& .copyright": {
    padding: theme.spacing(7, 0),
  },

  [theme.breakpoints.down("md")]: {
    "& .contact-info": {
      padding: theme.spacing(6, 0),
      gap: theme.spacing(4),
      flexDirection: "column",
    },

    "& .copyright": {
      padding: theme.spacing(6, 0),
    },
  },
}));

const FooterHeaderWrapper = styled(Box)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.098)",

  "& .header": {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    ".logo": {
      height: "40px",
    },

    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      gap: theme.spacing(6),

      ".logo": {
        width: "126px",
        height: "32px",
      },
    },
  },
}));

const FooterNavSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),

  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const FooterLegalSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(6),

  ".legal-items": {
    gap: theme.spacing(2),

    ".MuiTypography-root": {
      height: "32px",
    },
  },

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(1),
    flexDirection: "column-reverse",
    alignItems: "flex-start",

    ".legal-items": {
      gap: theme.spacing(1),
      marginTop: theme.spacing(6),
    },
  },
}));

export const Footer = () => {
  const mdBreakpoint = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const lgBreakpoint = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand =
    (panel: number) => (_event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : null);
    };

  const contactInfo = (
    <Box className="contact-info">
      <FooterContactInfo
        icon={<Image src={ContactPhone} alt="phone" />}
        label="0800 771 5055"
        href="tel:08007715055"
      />
      <FooterContactInfo
        icon={<Image src={ContactWhatsapp} alt="phone" />}
        label="Precisa de ajuda?"
        href="#"
      />
    </Box>
  );

  return (
    <FooterContainer>
      <FooterHeaderWrapper>
        <Box className="vw-adjustable header">
          <Stack display="flex" flexGrow={1}>
            <Image className="logo" src={EstacioLogoWhite} alt="estácio logo" />
          </Stack>
          {!mdBreakpoint && contactInfo}
        </Box>
      </FooterHeaderWrapper>
      {mdBreakpoint && <Box className="vw-adjustable">{contactInfo}</Box>}

      {mdBreakpoint && (
        <Box className="vw-adjustable">
          <Divider sx={{ borderColor: "var(--foreground-light)" }} />
        </Box>
      )}

      {!lgBreakpoint && (
        <FooterNavSection className="vw-adjustable">
          <Grid container sx={{ rowGap: 8 }}>
            {navigationItems.map((item, i) => (
              <Grid key={i} container sx={{ width: "25%" }}>
                <FooterNavColumn title={item.title} items={item.items} />
              </Grid>
            ))}
          </Grid>
        </FooterNavSection>
      )}

      {lgBreakpoint && (
        <FooterNavSection>
          {navigationItems.map((item, i) => (
            <FooterNavAccordion
              key={i}
              expanded={expanded === i}
              onChange={toggleExpand(i)}
              title={item.title}
              items={item.items}
            />
          ))}
        </FooterNavSection>
      )}

      <Box className="vw-adjustable">
        <Divider sx={{ borderColor: "var(--foreground-light)" }} />
      </Box>

      <FooterLegalSection className="vw-adjustable">
        <Stack
          className="legal-items"
          display="flex"
          flexDirection="column"
          flexGrow={1}
        >
          <Typography component={Link} href="#">
            Política de privacidade
          </Typography>
          <Typography component={Link} href="#">
            Código de Ética
          </Typography>
          <Typography component={Link} href="#">
            Preferência de cookies
          </Typography>
          <Typography component={Link} href="#">
            Mapa do site
          </Typography>
        </Stack>
        <Image src={EMecQRCode} alt="e-mec qr code" />
      </FooterLegalSection>

      <Box className="vw-adjustable">
        <Divider sx={{ borderColor: "var(--foreground-light)" }} />
      </Box>

      <Box className="vw-adjustable">
        <Box className="copyright">
          <Typography variant="body1">
            Estácio Brasil - Todos os direitos reservados
          </Typography>
        </Box>
      </Box>
    </FooterContainer>
  );
};
