"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Navbar from "../components/Navbar";
import ToolbarDevices from "../components/Toolbar";
import DevicesTable from "@/components/DevicesTable";
import AppDataContext from "../../data/DataContext";

export default function Home() {
  const appData = React.useContext(AppDataContext);

  // console.log("appData", appData);
  return (
    <>
      <Navbar title="Devices" />
      <ToolbarDevices title="Devices" />
      <DevicesTable tableData={appData?.devices} />
    </>
  );
}
