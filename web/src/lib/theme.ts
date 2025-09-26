"use client";

import { createTheme } from "@mui/material";

export const theme = createTheme({
  spacing: "4px",
  palette: {
    primary: {
      main: "#144BC8",
      dark: "#001F66",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#EE325D",
      dark: "#AE052B",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "var(--font-inter)",
    h1: {
      fontSize: "32px",
      lineHeight: "120%",
      fontWeight: 500,
      fontFamily: "var(--font-montserrat)",
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
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontWeight: 500,
          lineHeight: "133%",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          paddingRight: "6px",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "8px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: theme.palette.primary.main,
        }),
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          height: "42px",

          ".MuiTableCell-root": {
            color: theme.palette.primary.contrastText,
            padding: 0,
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            fontSize: "16px",
            fontWeight: 500,
          },
        }),
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          ".MuiTableRow-root": {
            height: "56px",

            ".MuiTypography-root": {
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "117%",
            },
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        checked: {
          color: "#f00",
        },
      },
    },
  },
  cssVariables: true,
});
