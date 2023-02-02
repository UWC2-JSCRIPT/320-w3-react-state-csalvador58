import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material/";
import PropTypes from "prop-types";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function BnbRental({
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
  return (
    // <Grid container>

    <Grid item xs={12} padding={"5%"}>
      <Card
        sx={{
          minWidth: { xs: "345px", sm: "45vw", md: "25vw" },
          maxWidth: { xs: "90vw", sm: "50vw", md: "35vw" },
          height: { xs: "50vh", sm: "50vh", md: "55vh" },
        }}
      >
        <CardMedia
          component="img"
          src={image}
          alt={imageAlt}
          sx={{
            height: { xs: "55%", sm: "50%", md: "60%" },
          }}
        />
        <CardContent
          sx={{ height: { xs: "45%", sm: "50%", md: "40%" }, paddingX: 4 }}
        >
          <Typography variant="h6" component="h1" paddingBottom={2}>
            {title}
          </Typography>
          <Grid container direction="row" justifyContent="space-between">
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
                <IconButton>
                  <AddShoppingCartIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default BnbRental;

BnbRental.propTypes = {
  imageAlt: PropTypes.string.isRequired,
};
