import React from "react";
import { Box, Grid } from "@mui/material/";

function GridContainer({children, spacing}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={spacing}>
       {children}
      </Grid>
    </Box>
  );
}

export default GridContainer;
