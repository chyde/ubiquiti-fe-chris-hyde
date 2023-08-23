// import './globals.css'
"use client";
import type { Metadata } from "next";
import CssBaseline from "@mui/material/CssBaseline";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

import React, { createContext, useEffect } from "react";

import AppDataContext from "../../data/DataContext";
import getData from "../../data/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chris Hyde's Ubitquity interview platform",
  description: "A Next JS app for Ubiquiti interview platform",
};

const theme = createTheme({
  // palette: {
  //   mode: "light",
  //   primary: {
  //     main: "#007cbb",
  //   },
  //   secondary: {
  //     main: "#ff9100",
  //   },
  // },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [appData, setAppData] = React.useState<null | any>(null);

  useEffect(() => {
    console.log("trying to get data");
    getData(setAppData);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        <ThemeProvider theme={theme}>
          <AppDataContext.Provider value={appData}>
            <CssBaseline />
            {children}
          </AppDataContext.Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
