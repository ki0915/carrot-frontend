import React from "react";
import { useState } from "react";
import { Container, Grid } from "@mui/material";
import { grid } from "@mui/system";

const Test = (): JSX.Element => {
  return (
    <Container style={{ background: "#022fff" }}>
      <Grid container style={{ background: "#ff2fff" }}>
        <Grid item xs={12} md={6}>
          xs-12
        </Grid>
        <Grid item xs={12} md={6}>
          xs-12
        </Grid>
      </Grid>
      <Grid container style={{ backgroundColor: "#ff9fff" }}>
        <Grid item xs={6} md={3} style={{ background: "#ffff2f" }}>
          xs-6
        </Grid>
        <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
          xs-6
        </Grid>
        <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
          xs-6
        </Grid>
        <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
          xs-6
        </Grid>
      </Grid>
    </Container>
  );
};

export default Test;
