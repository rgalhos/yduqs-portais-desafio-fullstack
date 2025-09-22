import { Box, BoxProps, Typography } from "@mui/material";

export interface IFooterContactInfoProps extends BoxProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
}

export const FooterContactInfo = ({
  icon,
  label,
  href,
  ...props
}: IFooterContactInfoProps) => {
  return (
    <Box
      component="a"
      href={href}
      sx={(theme) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing(3),
      })}
      {...props}
    >
      {icon}

      <Typography variant="body1" fontWeight={600}>
        {label}
      </Typography>
    </Box>
  );
};
