import Image from "next/image";
import { useRouter } from "next/router";
import { IOffer } from "@/shared/interfaces/offer.interface";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@public/close.svg";
import PlusIcon from "@public/plus.svg";
import { InstallmentsTable } from "../InstallmentsTable/InstallmentsTable";

interface IOfferDetailsDrawerProps {
  offer: IOffer;
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
      sx={{ m: 0, py: 0, px: { xs: 4, md: 6 } }}
    >
      <Typography>{title}</Typography>
    </Box>
    <AccordionDetails
      sx={{
        pt: 0,
        pb: 4,
        px: { xs: 4, md: 6 },
      }}
    >
      <Typography variant="body2">{children}</Typography>
    </AccordionDetails>
  </Accordion>
);

export const OfferDetailsDrawer = ({
  offer,
  open,
  onClose,
}: IOfferDetailsDrawerProps) => {
  const router = useRouter();

  return (
    <Drawer
      keepMounted={false}
      variant="persistent"
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: { xs: "100%", md: "600px" },
          },
        },
      }}
    >
      <Box sx={{ px: { xs: 4, md: 8 } }}>
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

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            gap: { xs: 6, md: 8 },
          }}
        >
          {Array.isArray(offer.installments) && (
            <Box>
              <Typography
                variant="body1"
                fontWeight={500}
                sx={{
                  pt: { xs: 4, md: 6 },
                  pb: 4,
                }}
              >
                Qual dessas opções de parcelas você prefere?
              </Typography>
              <InstallmentsTable installments={offer.installments} />
            </Box>
          )}

          <Stack display="flex" flexDirection="column" gap={4}>
            <DetailAccordion title="Sobre a Bolsa Incentivo">
              Lorem ipsum dolor sit amet
            </DetailAccordion>
            <DetailAccordion title="Sobre as suas escolhas">
              Lorem ipsum dolor sit amet
            </DetailAccordion>
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          background: "#ffffff",
          position: { xs: "sticky", md: "relative" },
          width: "100%",
          bottom: 0,
          left: 0,
          right: 0,
          mt: 6,
          px: { xs: 4, md: 8 },
          py: { xs: 4, md: 6 },
          boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.12)",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={() =>
            router.push({
              pathname: "/sign-up/" + offer.id,
            })
          }
        >
          Avançar
        </Button>
      </Box>
    </Drawer>
  );
};
