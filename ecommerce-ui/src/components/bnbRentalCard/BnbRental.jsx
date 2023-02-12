import React, { useContext } from "react";
import BnbRentalImage from "./BnbRentalImage";
import BnbRentalContent1 from "./BnbRentalContent1";
import BnbRentalContent2 from "./BnbRentalContent2";
import RentalCartContext from "../../store/RentalCartContext";
import {
  Card,
  CardContent,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material/";
import PropTypes from "prop-types";

export default function BnbRental({
  id,
  houseType,
  image,
  imageAlt,
  location,
  paymentInfo,
  stars,
  title,
}) {
  const rentalCart = useContext(RentalCartContext);

  const reviews = stars ? `Rating: ${stars} / 5` : "New Rental!";
  const rentalLocation = `${location.city}, ${location.country}`;

  const addToCartHandler = () => {
    rentalCart.addRental({
      title: title,
      fee: paymentInfo.cost,
      city: location.city,
      numberOfDays: 1,
    });
  };

  return (
    <>
      <Card elevation={0}>
        <Tooltip title="Yes! Click here to add me to the cart!" placement="top">
          <IconButton onClick={addToCartHandler}>
            <BnbRentalImage image={image} imageAlt={imageAlt} />
          </IconButton>
        </Tooltip>
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
                addToCartHandler={addToCartHandler}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

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
