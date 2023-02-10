import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material/";
import PropTypes from "prop-types";
import BnbRentalImage from "./BnbRentalImage";
import BnbRentalContent1 from "./BnbRentalContent1";
import BnbRentalContent2 from "./BnbRentalContent2";

function BnbRental({
  id,
  houseType,
  image,
  imageAlt,
  location,
  paymentInfo,
  stars,
  title,
}) {
  const reviews = `Stars: ${stars} / 5`;
  const rentalLocation = `${location.city}, ${location.country}`;

  return (
    <>
      <Card elevation={0}>
        <BnbRentalImage image={image} imageAlt={imageAlt} />
        <CardContent sx={{ paddingX: 3 }}>
          <Typography variant="h6" component="h1" paddingBottom={2}>
            {title}
          </Typography>
          <Grid container direction="row">
            <BnbRentalContent1
              reviews={reviews}
              rentalLocation={rentalLocation}
            />
            <Grid container justifyContent="space-between">
              <BnbRentalContent2
                id={id}
                location={location}
                paymentInfo={paymentInfo}
                title={title}
                houseType={houseType}
              />
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
  houseType: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
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
