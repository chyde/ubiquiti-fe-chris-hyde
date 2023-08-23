"use client";
import { createContext } from "react";

const AppDataContext = createContext({ version: null, devices: [] });

export default AppDataContext;
