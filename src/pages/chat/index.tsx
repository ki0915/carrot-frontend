import React from "react";
import {
  AppBar,
  Box,
  Grid,
  Typography,
  LinearProgress,
  Toolbar,
  Button,
  TextField,
  Chip,
} from "@mui/material";

import { Avatar, ListItemAvatar, ListItemText } from "@mui/material";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { message } from "./data";
import moment from "moment";

const Chatt = (): JSX.Element => {
  const myId = "me";

  return (
    <>
      <AppBar sx={{ backgroundColor: "#ffffff", color: "#000000" }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={1}>
              <Avatar variant="rounded" />
            </Grid>
            <Grid item xs={9}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h6">사가세요.....</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">16000원</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Button color="secondary" variant="outlined">
                거래 후기 남기기
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box>
        <Grid container>
          {message.map((message): JSX.Element => {
            return (
              <Grid item xs={12} key={message.id}>
                {message.me !== myId && (
                  <Box display="fles" justifyContent="left" alignItems="end">
                    <Chip label={message.message} />
                    <Typography variant="caption">
                      {moment(message.sendedAt).format("YYYY-MM-DD HH:mm:ss")}
                    </Typography>
                  </Box>
                )}
                {message.me === myId && (
                  <Box display="flex" justifyContent="right" alignItems="end">
                    <Typography variant="caption">
                      {moment(message.sendedAt).format("YYYY-MM-DD HH:mm:ss")}
                    </Typography>
                    <Chip label={message.message} />
                  </Box>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, backgroundColor: "#ffffff" }}
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={11}>
              <TextField size="small" fullWidth />
            </Grid>
            <Grid item xs={1}>
              <Box display="flex" justifyContent={"center"}>
                <IconButton>
                  <SendIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Chatt;
