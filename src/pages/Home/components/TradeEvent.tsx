import * as React from "react";
import { Box } from "@mui/system";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteIcon from "@mui/icons-material/Favorite";

type TradeEventType = {
  chat?: number;
  interest?: number;
};

const TradeEvent = (Event: TradeEventType) => {
  const { chat, interest } = Event;
  return (
    <Box display="flex" alignItems="center" justifyContent="right">
      {chat && (
        <>
          <h3>
            <ChatIcon /> {chat}
          </h3>
        </>
      )}

      {chat && (
        <>
          <h3>
            <FavoriteIcon /> {interest}
          </h3>
        </>
      )}
    </Box>
  );
};

export default TradeEvent;
