import * as React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Grid,
  Typography,
  LinearProgress,
  Toolbar,
  Button,
} from "@mui/material";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Favorite from "@mui/icons-material/Favorite";

type TradeType = {
  price: number;
  interest: boolean;
  Suggestion_possible: boolean;
};

const TradeAppBar = (App_intertype: TradeType): JSX.Element => {
  const { price, interest, Suggestion_possible } = App_intertype;

  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: "auto", bottom: 0, backgroundColor: "#ffffff" }}
    >
      <Toolbar>
        <Grid container>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            {interest ? (
              <FavoriteIcon color="secondary" fontSize="large" />
            ) : (
              <FavoriteBorderIcon color="primary" fontSize="large" />
            )}
            <FavoriteBorderIcon color="primary" fontSize="large" />
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h5" color="#2b2b2b">
                  <strong>{price}</strong>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" color="#2b2b2b">
                  <strong>
                    {Suggestion_possible ? "가격 제안가능" : "가격 제안 불가"}
                  </strong>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
            <Button variant="contained" color="secondary" fullWidth>
              채팅으로 거래하기
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TradeAppBar;
