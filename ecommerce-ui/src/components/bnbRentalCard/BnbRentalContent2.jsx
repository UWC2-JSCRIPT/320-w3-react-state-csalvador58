import React from "react";
import { Grid, Typography } from "@mui/material/";
import PropTypes from "prop-types";
import AddToCart from "./AddToCart";

export default function BnbRentalContent2({
  id,
  location,
  paymentInfo,
  title,
  houseType,
}) {
  const paymentCost = `$${paymentInfo.cost}/day`;
  const paymentNote = `${paymentInfo.description}`;
  const type = `Type: ${houseType}`;

  return (
    <>
      <Grid item>
        <Typography variant="body2" color="text.secondary">
          {type}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign={"left"}
          fontWeight="bold"
        >
          {paymentCost}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={"left"}>
          {paymentNote}
        </Typography>
      </Grid>
      <Grid item>
        <AddToCart
          id={id}
          title={title}
          fee={paymentInfo.cost}
          city={location.city}
        />
      </Grid>
    </>
  );
}

BnbRentalContent2.propTypes = {
  id: PropTypes.number.isRequired,
  houseType: PropTypes.string.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }),
  paymentInfo: PropTypes.shape({
    cost: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
};
