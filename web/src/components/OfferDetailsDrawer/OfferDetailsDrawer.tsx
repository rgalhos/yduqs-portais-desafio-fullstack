import Image from "next/image";
import {
  IOffer,
  IInstallment,
} from "@/shared/interfaces/offer.interface";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@public/close.svg";
import PlusIcon from "@public/plus.svg";

interface IOfferDetailsDrawerProps {
  installments?: IInstallment[];
  open: boolean;
  onClose: () => void;
}

const DetailAccordion = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Accordion
    disableGutters
    sx={{
      "--mui-shape-borderRadius": "8px",
      border: "1px solid #E0E0E0",
      borderRadius: "8px",
      boxShadow: 0,

      "&::before": {
        display: "none",
      },
    }}
  >
    <Box
      component={AccordionSummary}
      expandIcon={<Box component={Image} src={PlusIcon} alt="close" m="auto" />}
      sx={{ m: 0, p: 0 }}
    >
      <Typography>{title}</Typography>
    </Box>
    <AccordionDetails>
      <Typography variant="body2">{children}</Typography>
    </AccordionDetails>
  </Accordion>
);

export const OfferDetailsDrawer = ({
  installments,
  open,
  onClose,
}: IOfferDetailsDrawerProps) => {
  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: { xs: "100%", md: "600px" },
            px: { xs: 4, md: 8 },
          },
        },
      }}
    >
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        py={{ xs: 5, md: 6 }}
      >
        <Typography
          fontFamily="var(--font-montserrat)"
          fontWeight={500}
          fontSize={32}
          lineHeight="120%"
        >
          Mais detalhes
        </Typography>
        <Box
          onClick={onClose}
          sx={{ cursor: "pointer" }}
          height={{ xs: 40, md: 48 }}
          display="flex"
          alignItems="center"
        >
          <Box component={Image} src={CloseIcon} alt="close" m="auto" />
        </Box>
      </Stack>

      <Stack display="flex" flexDirection="column" gap={4}>
        <DetailAccordion title="Sobre a Bolsa Incentivo">
          Lorem ipsum dolor sit amet
        </DetailAccordion>
        <DetailAccordion title="Sobre as suas escolhas">
          Lorem ipsum dolor sit amet
        </DetailAccordion>
      </Stack>
    </Drawer>
  );
};
