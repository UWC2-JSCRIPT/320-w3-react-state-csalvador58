import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Paper,
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
    <>
      <Card
        elevation={0}
        sx={
          {
            // minWidth: { xs: "345px", sm: "45vw", md: "25vw", xl: "20vw" },
            // maxWidth: { xs: "90vw", sm: "50vw", md: "35vw", xl: "30vw" },
            // height: { xs: "50vh", sm: "40vh", md: "40vh" },
          }
        }
      >
        {/* <Card elevation={8}> */}
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <CardMedia
            component="img"
            src={image}
            alt={imageAlt}
            sx={{width: "90%", boxShadow: "0px 10px 10px 0px rgba(0,0,0,0.75)"}}
            // sx={{
            //   height: { xs: "80%", sm: "50%", md: "60%" },
            // }}
          />
        </Box>
        {/* </Card> */}
        <CardContent
          sx={{
            // height: { xs: "20%", sm: "50%", md: "40%" },
            paddingX: 3,
            // objectFit: "scale-down",
            // justifyContent: "space-evenly"
          }}
        >
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
    </>
  );
}

export default BnbRental;

BnbRental.propTypes = {
  imageAlt: PropTypes.string.isRequired,
};
