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

const TradeDetail = (): JSX.Element => {
  return (
    <>
      <Box padding="20px">
        <Grid container>
          <Grid item xs={1}>
            <Avatar src="이미지 주소" sx={{ width: 80, height: 80 }} />
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6">아이디</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="subtitle1">지역</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="h6" color="primary">
                  36.6°C
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={70}
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Grid>
              <Grid item xs={4}>
                <SentimentSatisfiedIcon fontSize="large" color="primary" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <hr color="#dddddd" />
        <Typography variant="h4">제목</Typography>
        <Box>
          물건 팝니다.
          <br />
          아주 싸게 팝니다.
        </Box>
      </Box>
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
              <FavoriteBorderIcon color="primary" fontSize="large" />
            </Grid>
            <Grid item xs={8}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h5" color="#2b2b2b">
                    <strong>30000원</strong>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" color="#2b2b2b">
                    <strong>가격 제안하기</strong>
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
    </>
  );
};

export default TradeDetail;
