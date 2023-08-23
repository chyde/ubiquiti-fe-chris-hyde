"use client";
import * as React from "react";

import Navbar from "../../components/Navbar";
import ToolbarDevices from "../../components/Toolbar";
import DevicesTable from "@/components/DevicesTable";
import AppDataContext from "../../../data/DataContext";

export default function Home() {
  const appData = React.useContext(AppDataContext);

  // console.log("appData", appData);
  return (
    <>
      <Navbar title="Devices" />
      <ToolbarDevices title="Devices" />
      <ToolbarDevices title="Devices" />
    </>
  );
}
