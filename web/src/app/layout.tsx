import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/lib/theme";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import "./globals.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estácio",
  description: "Estácio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Header />

            {children}

            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
