import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Navbar({ title }: { title: string }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ paddingLeft: 0, backgroundColor: "#F6F6F8" }}
        elevation={0}
      >
        <Toolbar disableGutters={true}>
          <img
            src="https://picsum.photos/200/200"
            alt="Chris Hyde's Ubiquiti interview platform"
            height={"65px"}
          />
          <Typography
            variant="h6"
            component="div"
            color={"grey.800"}
            sx={{ flexGrow: 1, marginLeft: 2 }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            color={"grey.800"}
            sx={{ marginRight: 2 }}
          >
            Chris Hyde - Sr. Front-End Engineer
          </Typography>
        </Toolbar>

        <Divider />
      </AppBar>
    </Box>
  );
}
