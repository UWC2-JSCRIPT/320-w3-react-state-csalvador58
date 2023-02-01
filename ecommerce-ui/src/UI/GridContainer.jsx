import React from "react";
import { Box, Grid } from "@mui/material/";
import BnbRental from "../components/BnbRental";


function GridContainer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <BnbRental />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BnbRental />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BnbRental />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <BnbRental />
        </Grid>
      </Grid>
    </Box>
  );
}

export default GridContainer;
