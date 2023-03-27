import React from "react";
import { Grid, Typography } from "@mui/material/";
import PropTypes from "prop-types";

export default function BnbRentalContent1({ reviews, rentalLocation }) {
  return (
    <Grid item container justifyContent="space-between">
      <Typography variant="body2" color="text.secondary" fontWeight="bold">
        {rentalLocation}
      </Typography>
      <Typography color="text.secondary" fontWeight="bold">
        {reviews}
      </Typography>
    </Grid>
  );
}

BnbRentalContent1.propTypes = {
  reviews: PropTypes.string.isRequired,
  rentalLocation: PropTypes.string.isRequired,
};
