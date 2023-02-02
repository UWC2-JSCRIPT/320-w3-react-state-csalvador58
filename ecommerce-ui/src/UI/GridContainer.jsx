import React from "react";
import { Grid, Paper } from "@mui/material/";

function GridContainer({ children, spacing, columns }) {
  return (
    <Paper
      sx={{
        padding: 2,
        flexGrow: 0,
        elevation: 0,
        minWidth: "345px",
      }}
    >
      <Grid container spacing={spacing} columns={columns}>
        {children}
      </Grid>
    </Paper>
  );
}

export default GridContainer;
