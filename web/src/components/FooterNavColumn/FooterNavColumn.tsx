import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

export interface IFooterNavColumnItem {
  label: string;
  href: string;
}

export interface IFooterNavColumnProps {
  title: string;
  items: IFooterNavColumnItem[];
}

const NavigationItem = ({ label, href }: IFooterNavColumnItem) => (
  <Box sx={{ height: "32px" }}>
    <Typography component={Link} href={href}>
      {label}
    </Typography>
  </Box>
);

export const FooterNavColumn = ({ title, items }: IFooterNavColumnProps) => {
  return (
    <Stack display="flex" flexDirection="column" gap={1}>
      <Typography
        variant="body1"
        fontWeight={600}
        textTransform="uppercase"
        letterSpacing="2%"
        height="24"
        pb={2}
      >
        {title}
      </Typography>

      {items.map((item, i) => (
        <NavigationItem key={i} href={item.href} label={item.label} />
      ))}
    </Stack>
  );
};
