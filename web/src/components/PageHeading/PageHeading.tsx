"use client";

import { Box, styled, Typography } from "@mui/material";

export interface IPageHeadingProps {
  title?: React.ReactNode | string;
  subtitle?: React.ReactNode | string;
}

const PageHeadingWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  gap: theme.spacing(2),
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
}));

export const PageHeading = ({ title, subtitle }: IPageHeadingProps) => {
  return (
    <PageHeadingWrapper>
      <Box className="vw-adjustable">
        {title && (
          <Typography variant="h1" component="div">
            {title}
          </Typography>
        )}

        {subtitle && (
          <Typography variant="body1" component="div">
            {subtitle}
          </Typography>
        )}
      </Box>
    </PageHeadingWrapper>
  );
};
