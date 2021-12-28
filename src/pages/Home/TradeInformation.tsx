import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";

type TradeInformationType = {
  title: string;
  location: string;
  createdAt: Date;
  updateAt?: Date;
  price: number;
};

const TradeInformation = (information: TradeInformationType) => {
  const { title, location, price, createdAt, updateAt } = information;
  const date = updateAt != null ? moment(updateAt) : moment(createdAt);
  const displayDate = date.format("YYYY-MM-DD HH:mm");
  return (
    <Box>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="subtitle1" style={{ color: "rgba(0,0,0,0.5)" }}>
        {location}
        {displayDate}
      </Typography>
      <Typography variant="subtitle1">
        <strong>{price}원</strong>
      </Typography>
    </Box>
  );
};

export default TradeInformation;
