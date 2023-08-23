import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Home({ title }: { title: string }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ paddingLeft: 0, backgroundColor: "#C4C4C4" }}
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
            sx={{ flexGrow: 1, marginLeft: 2 }}
          >
            {title}
          </Typography>
          <Typography variant="body1" component="div" sx={{ marginRight: 2 }}>
            Chris Hyde - Sr. Front-End Engineer
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
