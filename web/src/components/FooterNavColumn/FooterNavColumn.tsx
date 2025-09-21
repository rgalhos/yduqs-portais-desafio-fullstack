import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

export interface IFooterMenuGroupItem {
  label: string;
  href: string;
}

export interface IFooterMenuGroupProps {
  title: string;
  items: IFooterMenuGroupItem[];
}

const NavigationItem = ({ label, href }: IFooterMenuGroupItem) => (
  <Box sx={{ height: "32px" }}>
    <Typography component={Link} href={href}>
      {label}
    </Typography>
  </Box>
);

export const FooterMenuGroup = ({ title, items }: IFooterMenuGroupProps) => {
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
