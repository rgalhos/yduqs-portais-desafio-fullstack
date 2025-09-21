"use client";

import Image from "next/image";
import { Box, Stack, styled, useMediaQuery } from "@mui/material";
import { ContactInfo } from "@/components/ContactInfo/ContactInfo";
import EstacioLogoWhite from "@public/estacio-logo-white.svg";
import ContactWhatsapp from "@public/contact-whatsapp.svg";
import ContactPhone from "@public/contact-phone.svg";

const FooterContainer = styled("footer")(({ theme }) => ({
  position: "static",
  background: theme.palette.primary.main,
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

  hr: {
    color: "var(--foreground-light)",
  },

  [theme.breakpoints.down("md")]: {
    "& .contact-info": {
      padding: theme.spacing(6, 0),
      gap: theme.spacing(4),
      flexDirection: "column",
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

const FooterWrapper = styled(Box)(({ theme }) => ({}));

export const Footer = () => {
  const smBreakpoint = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const contactInfo = (
    <Box className="contact-info">
      <ContactInfo
        icon={<Image src={ContactWhatsapp} alt="phone" />}
        label="Precisa de ajuda?"
        href="#"
      />
      <ContactInfo
        icon={<Image src={ContactPhone} alt="phone" />}
        label="0800 771 5055"
        href="tel:0800 771 5055"
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
          {!smBreakpoint && contactInfo}
        </Box>
      </FooterHeaderWrapper>

      {smBreakpoint && (
        <Box className="vw-adjustable">
          {contactInfo}
          <hr />
        </Box>
      )}
    </FooterContainer>
  );
};
