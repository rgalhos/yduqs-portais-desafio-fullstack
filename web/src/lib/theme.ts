"use client";

import { createTheme } from "@mui/material";

export const theme = createTheme({
  spacing: "4px",
  palette: {
    primary: {
      main: "#144BC8",
      dark: "#001F66",
    },
    secondary: {
      main: "#EE325D",
      dark: "#AE052B",
    },
  },
  typography: {
    fontFamily: "var(--font-inter)",
    h1: {
      fontSize: "32px",
      lineHeight: "120%",
      fontWeight: 500,
    },
    body1: {
      fontSize: "16px",
      lineHeight: "150%",
      fontWeight: 400,
    },
    body2: {
      fontSize: "14px",
      lineHeight: "133%",
      fontWeight: 400,
    },
    button: {
      fontSize: "16px",
      lineHeight: "100%",
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: "none",
          verticalAlign: "middle",
          borderRadius: "8px",
          padding: theme.spacing(4, 6),
          gap: theme.spacing(4),
        }),
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: ({ theme }) => ({
          [theme.breakpoints.down("md")]: {
            fontSize: "24px",
          },
        }),
      },
    },
  },
  cssVariables: true,
});
