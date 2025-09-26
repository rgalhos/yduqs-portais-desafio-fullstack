import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Inter, Montserrat } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/lib/theme";
import "@/app/globals.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "@/lib/hooks/snackbar.hook";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const queryClient = new QueryClient();

  return (
    <div className={`${inter.variable} ${montserrat.variable}`}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <QueryClientProvider client={queryClient}>
            {getLayout(<Component {...pageProps} />)}
          </QueryClientProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  );
}
