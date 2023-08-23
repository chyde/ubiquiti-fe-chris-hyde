import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Button, IconButton, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AccountCircle } from "@mui/icons-material";

export default function DeviceViewBar({ title }: { title: string }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ paddingLeft: 0, backgroundColor: "white" }}
        elevation={0}
      >
        <Toolbar sx={{ flexGrow: 1 }}>
          <IconButton
            size="large"
            aria-label="search"
            color="primary"
            href="./"
          >
            <ArrowBackIcon />
          </IconButton>
        </Toolbar>

        <Divider />
      </AppBar>
    </Box>
  );
}
