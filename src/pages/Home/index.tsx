import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Avatar, ListItemAvatar, ListItemText } from "@mui/material";
import { tradeItems } from "./data";

const ImageTheme = {
  width: "150px",
  height: "150px",
};

type TradeItem = {
  id: string;
  image: string;
  title: string;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
  price: number;
  chat?: number;
  interest?: number;
};

const Home = (): JSX.Element => {
  const [tradeItems, setTradeItems] = useState<TradeItem[]>([]);
  const readArticles = async () => {
    const { data } = await axios.get("http://localhost:5000/trade/articles");
    setTradeItems(data);
  };
 

  useEffect(() => {
    readArticles();
  }, []);

  return (
    <Box>
      <List>
        {tradeItems.map((item): JSX.Element => {
          return (
            <ListItem key={item.id}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar variant="rounded" src={item.image} sx={ImageTheme} />
                </ListItemAvatar>
                <ListItemText primary={item.title} secondary={item.location} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Home;
