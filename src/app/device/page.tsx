"use client";
import * as React from "react";

import Navbar from "../../components/Navbar";
import DeviceViewBar from "../../components/DeviceViewBar";
import AppDataContext from "../../../data/DataContext";

export default function Home() {
  const appData = React.useContext(AppDataContext);

  // console.log("appData", appData);
  return (
    <>
      <Navbar title="Devices" />
      <DeviceViewBar title="Devices" />
      <div>Device</div>
    </>
  );
}
