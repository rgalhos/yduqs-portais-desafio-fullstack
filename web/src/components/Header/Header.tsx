"use client";

import Image from "next/image";
import EstacioLogoBlack from "@/../public/estacio-logo-black.svg";
import { Box, styled } from "@mui/material";

const HeaderContainer = styled("header")(({ theme }) => ({
  maxHeight: "88px",
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),

  ".logo": {
    height: "40px",
  },

  [theme.breakpoints.down("md")]: {
    maxHeight: "64px",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),

    ".logo": {
      width: "126px",
      height: "32px",
    },
  },
}));

export const Header = () => {
  return (
    <HeaderContainer>
      <Box className="vw-adjustable">
        <Image className="logo" src={EstacioLogoBlack} alt="estácio logo" />
      </Box>
    </HeaderContainer>
  );
};
