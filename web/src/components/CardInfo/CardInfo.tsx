import Image from "next/image";
import { Box, styled, Typography } from "@mui/material";
import InfoIcon from "@public/info.svg";

const CardInfoContent = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(6),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing(1),

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4),
  },
}));

export interface CardInfoProps {
  details: string;
}

export const CardInfo = ({ details }: CardInfoProps) => (
  <CardInfoContent>
    <Image src={InfoIcon} alt="" />
    <Typography variant="body1">{details}</Typography>
  </CardInfoContent>
);
