import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Button, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AccountCircle } from "@mui/icons-material";

export default function ToolbarDevices({ title }: { title: string }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ paddingLeft: 0, backgroundColor: "white" }}
        elevation={0}
      >
        <Toolbar sx={{ flexGrow: 1 }}>
          <IconButton size="large" aria-label="search" color="inherit">
            {/* <SearchIcon /> */}
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <SearchIcon sx={{ color: "action.active", mr: 0.5, my: 0.5 }} />
            <TextField id="input-with-sx" label="Search" variant="standard" />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Button variant="contained" color="primary" sx={{ marginX: 1 }}>
            Grid
          </Button>
          <Button variant="contained" color="primary" sx={{ marginX: 1 }}>
            List
          </Button>

          <Button variant="text" sx={{ marginX: 1 }}>
            Filter
          </Button>
        </Toolbar>

        <Divider />
      </AppBar>
    </Box>
  );
}
