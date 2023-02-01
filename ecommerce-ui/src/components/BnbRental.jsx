import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material/";
import PropTypes from "prop-types";

function BnbRental({ imageAlt, title, image, location, paymentInfo }) {
  const rentalLocation = `${location.city}, ${location.country}`;
  const paymentCost = `Fees: ${paymentInfo.cost}/day`;
  const paymentNote = `${paymentInfo.description}`;
  return (
    <Grid container>
      <Grid item xs={12} >
        <Card sx={{ minWidth: 345, maxWidth: 500}}>
          <CardMedia
            component="img"
            // height="fitContent"
            // image="/static/images/cards/contemplative-reptile.jpg"
            src={image}
            alt={imageAlt}
          />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ minWidth: 345, maxWidth: 500}}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {rentalLocation}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {paymentCost}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {paymentNote}
            </Typography>
          </CardContent>
          {/* <CardActionArea>
            Will enter action items/icons here
          </CardActionArea> */}
        </Card>
      </Grid>
    </Grid>
  );
}

export default BnbRental;

BnbRental.propTypes = {
  imageAlt: PropTypes.string.isRequired,
};
