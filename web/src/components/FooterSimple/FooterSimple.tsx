import Image from "next/image";
import {
  Box,
  Divider,
  Stack,
  styled,
  SvgIcon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { FooterContactInfo } from "../FooterContactInfo/FooterContactInfo";
import EstacioLogoWhite from "@public/estacio-logo-white.svg";
import ContactWhatsapp from "@public/contact-whatsapp.svg";
import ContactPhone from "@public/contact-phone.svg";
import Link from "next/link";

const FooterSimpleContainer = styled("footer")(({ theme }) => ({
  background: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,

  "& .contact-info": {
    padding: theme.spacing(1, 0),
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(10),
  },

  ".MuiDivider-root": {
    borderColor: theme.palette.primary.contrastText,
  },

  [theme.breakpoints.down("lg")]: {
    "& .contact-info": {
      padding: 0,
      gap: theme.spacing(4),
      flexDirection: "column-reverse",
    },
  },
}));

const FooterEstacioLogoWrapper = styled(Box)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.098)",
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  maxHeight: "64px",
  display: "none",

  ".logo": {
    width: "126px",
    height: "32px",
  },

  [theme.breakpoints.down("lg")]: {
    display: "block",
  },
}));

const FooterLegalSection = () => {
  const lgBreakpoint = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  if (lgBreakpoint) {
    return (
      <Stack flexDirection="column">
        <Stack flexDirection="column" gap={1}>
          <Typography component={Link} variant="body1" height="32px" href="#">
            Política de privacidade
          </Typography>
          <Typography component={Link} variant="body1" height="32px" href="#">
            Preferência de cookies
          </Typography>
        </Stack>

        <Divider sx={{ my: 6 }} />

        <Typography variant="body1" px={4}>
          Estácio Brasil - Todos os direitos reservados
        </Typography>
      </Stack>
    );
  }

  return (
    <Stack
      flexDirection="row"
      gap={4}
      alignItems="center"
      divider={
        <SvgIcon sx={{ width: "16px", height: "16px" }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0.666748V15.3334"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SvgIcon>
      }
    >
      <Typography component={Link} variant="body1" href="#">
        Política de privacidade
      </Typography>
      <Typography variant="body2" color="rgba(255, 255, 255, .8)">
        Estácio Brasil - Todos os direitos reservados
      </Typography>
    </Stack>
  );
};

export const FooterSimple = () => {
  return (
    <FooterSimpleContainer>
      <FooterEstacioLogoWrapper>
        <Box className="vw-adjustable">
          <Image className="logo" src={EstacioLogoWhite} alt="estácio logo" />
        </Box>
      </FooterEstacioLogoWrapper>
      <Stack
        className="vw-adjustable"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent={{ lg: "space-between" }}
        py={6}
        gap={6}
      >
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

        <FooterLegalSection />
      </Stack>
    </FooterSimpleContainer>
  );
};
