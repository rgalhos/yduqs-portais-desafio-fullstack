import { ICourseOption, IInstallment } from "@/shared/interfaces/course.interface";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Drawer,
} from "@mui/material";

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
    sx={{
      border: 0,
      boxShadow: 0,

      "&::before": {
        display: "none",
      },
    }}
  >
    <AccordionSummary>{title}</AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);

export const OfferDetailsDrawer = ({
  installments,
  open,
  onClose,
}: IOfferDetailsDrawerProps) => {
  return (
    <Drawer variant="persistent" anchor="right" open={open} onClose={onClose}>
      <DetailAccordion title="Sobre a Bolsa Incentivo">
        Lorem ipsum dolor sit amet
      </DetailAccordion>
      <DetailAccordion title="Sobre as suas escolhas">
        Lorem ipsum dolor sit amet
      </DetailAccordion>
    </Drawer>
  );
};
