import { SyntheticEvent } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import {
  IFooterNavColumnItem,
  IFooterNavColumnProps,
} from "@/components/FooterNavColumn/FooterNavColumn";
import ChevronDownIcon from "@public/chevron-down.svg";
import Link from "next/link";

export interface IFooterNavAccordionProps extends IFooterNavColumnProps {
  expanded: boolean;
  onChange: (event: SyntheticEvent, expand: boolean) => void;
}

const NavigationItem = ({ label, href }: IFooterNavColumnItem) => (
  <Box
    component={Link}
    href={href}
    style={{ display: "block", width: "100%", height: "32px" }}
  >
    <Typography variant="body1">{label}</Typography>
  </Box>
);

export const FooterNavAccordion = ({
  title,
  items,
  expanded,
  onChange,
}: IFooterNavAccordionProps) => {
  return (
    <Box
      className="vw-adjustable"
      sx={{
        backgroundColor: expanded
          ? "rgba(255, 255, 255, 0.098)"
          : "transparent",
        transition: "0.25s linear background-color",
      }}
    >
      <Accordion
        expanded={expanded}
        onChange={onChange}
        disableGutters
        sx={{
          background: "transparent",
          color: "var(--foreground-light)",
          border: 0,
          boxShadow: 0,

          "&::before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<Image src={ChevronDownIcon} alt="" />}
          sx={{ border: 0, boxShadow: 0 }}
        >
          <Typography
            variant="body1"
            fontWeight={600}
            textTransform="uppercase"
            letterSpacing="2%"
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ border: 0 }}>
          {items.map((item, i) => (
            <NavigationItem key={i} label={item.label} href={item.href} />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
