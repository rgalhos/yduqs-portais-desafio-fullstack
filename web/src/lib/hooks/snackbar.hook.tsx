import { Alert, AlertProps, Snackbar, SnackbarProps } from "@mui/material";
import { createContext, ReactNode, useContext, useState } from "react";

type ShowSnackbarProps = {
  severity: AlertProps["severity"];
  message: string;
  snackProps: Partial<SnackbarProps>;
};

interface IUseSnackbar {
  showSnackbar: (
    severity: AlertProps["severity"],
    message: string,
    snackProps?: Partial<SnackbarProps>
  ) => void;
  closeSnackbar: () => void;
}

const SnackbarContext = createContext({} as IUseSnackbar);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [props, setProps] = useState<ShowSnackbarProps>({
    severity: "success",
    message: "",
    snackProps: {},
  });

  const showSnackbar: IUseSnackbar["showSnackbar"] = (
    severity,
    message,
    snackProps = {}
  ) => {
    setProps({
      severity,
      message,
      snackProps,
    });
    setOpen(true);
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <>
      <SnackbarContext.Provider value={{ showSnackbar, closeSnackbar }}>
        {children}
      </SnackbarContext.Provider>

      <Snackbar
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        {...props.snackProps}
        open={open}
        onClose={(e, reason) => {
          if (reason === "escapeKeyDown") e.preventDefault();

          closeSnackbar();
        }}
      >
        <Alert
          onClose={closeSnackbar}
          severity={props.severity}
          variant="filled"
        >
          {props.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
