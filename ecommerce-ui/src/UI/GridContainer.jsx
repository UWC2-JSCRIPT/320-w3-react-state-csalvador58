import React from "react";
import PropTypes from "prop-types";
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

GridContainer.propTypes = {
  children: PropTypes.array.isRequired,
  spacing: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
};