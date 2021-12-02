import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import HomeWorkIco from "@mui/icons-material/HomeWork";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

const App = (): JSX.Element => {
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <Toolbar />
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <Grid container>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  style={{
                    backgroundColor: "transparent",
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <HomeIcon />홈
                </Button>
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  style={{
                    backgroundColor: "transparent",
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <HomeWorkIco />
                  동네 생활
                </Button>
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  style={{
                    backgroundColor: "transparent",
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <LocationOnOutlinedIcon />내 근처
                </Button>
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  style={{
                    backgroundColor: "transparent",
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <ContactSupportOutlinedIcon />
                  채팅
                </Button>
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  style={{
                    backgroundColor: "transparent",
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <PermIdentityOutlinedIcon />
                  나의 당근
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </main>
  );
};
