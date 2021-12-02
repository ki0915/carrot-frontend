import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

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
                홈
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                동네생활
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                내 근처
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                나의 당근
              </Box>
            </Grid>
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                채팅
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </main>
  );
};
