import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Navbar from "../components/Navbar";
import ToolbarDevices from "../components/Toolbar";

export default function Home() {
  return (
    <>
      <Navbar title="Devices" />
      <ToolbarDevices title="Devices" />
    </>
  );
}
