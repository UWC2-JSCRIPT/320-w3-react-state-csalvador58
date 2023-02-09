import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material/";
import PropTypes from "prop-types";
import AddToCart from "./AddToCart";
import BnbRentalImage from "./BnbRentalImage";

function BnbRental({
  id,
  imageAlt,
  houseType,
  image,
  location,
  paymentInfo,
  stars,
  title,
}) {
  const type = `Type: ${houseType}`;
  const reviews = `Stars: ${stars} / 5`;
  const rentalLocation = `${location.city}, ${location.country}`;
  const paymentCost = `$${paymentInfo.cost}/day`;
  const paymentNote = `${paymentInfo.description}`;

  const cartButtonIsClicked = (buttonId) => {
    console.log(buttonId)
  }

  return (
    <>
      <Card elevation={0}>
        <BnbRentalImage image={image} imageAlt={imageAlt} />
        <CardContent sx={{ paddingX: 3 }}>
          <Typography variant="h6" component="h1" paddingBottom={2}>
            {title}
          </Typography>
          <Grid container direction="row">
            <Grid item container justifyContent="space-between">
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight="bold"
              >
                {rentalLocation}
              </Typography>
              <Typography color="text.secondary" fontWeight="bold">
                {reviews}
              </Typography>
            </Grid>
            <Grid container justifyContent="space-between">
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
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign={"left"}
                >
                  {paymentNote}
                </Typography>
              </Grid>
              <Grid item>
                <AddToCart id={id} cartButtonAction={cartButtonIsClicked} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default BnbRental;

BnbRental.propTypes = {
  id: PropTypes.number.isRequired,
  imageAlt: PropTypes.string.isRequired,
  houseType: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }),
  paymentInfo: PropTypes.shape({
    cost: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
  stars: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
