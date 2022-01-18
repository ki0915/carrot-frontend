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
import axios from "axios";
import { useEffect, useState } from "react";
import { CHAR } from "sequelize/dist";
import TradeAppBar from "./TradeAppBar";

type TradeItmes = {
  id: string;
  image: string;
  title: string;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
  price: number;
  chat?: number;
  interest?: number;
  description: string;
  isAdjustable: boolean;
};

const TradeDetail = (): JSX.Element => {
  const [article, setArticle] = useState<TradeItmes>();
  const getArticles = async () => {
    const { data } = await axios.get("http://localhost:5000/trade/articles");
    setArticle(data);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <Box paddingTop="20px">
        <Grid container>
          <Grid item xs={1}>
            <Avatar
              src={"article && article.image"}
              sx={{ width: 80, height: 80 }}
            />
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
                <Box
                  display="flex"
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <SentimentSatisfiedIcon fontSize="large" color="primary" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <hr color="#dddddd" />
        <Typography variant="h4">{article && article.title}</Typography>
        <Box>
          {article && article.description}
          {article && (
            <TradeAppBar
              price={article.price}
              isAdjustable={article.isAdjustable}
              isInterest={true}
            />
          )}
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
