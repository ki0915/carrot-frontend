import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button, Grid } from "@mui/material";
import { Box, display } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import HomeWorkIco from "@mui/icons-material/HomeWork";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

type MenuType = {
  title: string;
  icon: JSX.Element;
};

const MenuStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "column",
  padding: "10px 5px",
};

const BottomAppBar = (): JSX.Element => {
  const menuItems: MenuType[] = [
    {
      title: "홈",
      icon: <HomeIcon />,
    },

    {
      title: "동네생활",
      icon: <HomeWorkIco />,
    },

    {
      title: "내 근처",
      icon: <LocationOnOutlinedIcon />,
    },

    {
      title: "채팅",
      icon: <ContactSupportOutlinedIcon />,
    },

    {
      title: "나의 당근",
      icon: <PermIdentityOutlinedIcon />,
    },
  ];

  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Grid container>
          {menuItems.map((item: MenuType): JSX.Element => {
            return (
              <Grid item xs key={item.title}>
                <Box display="flex" justifyContent="center">
                  <Button
                    variant="contained"
                    size="large"
                    disableElevation
                    style={MenuStyle}
                  >
                    {item.icon}
                    {item.title}
                  </Button>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default BottomAppBar;
