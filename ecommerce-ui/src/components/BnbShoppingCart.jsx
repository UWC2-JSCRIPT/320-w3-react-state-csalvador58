import React, { useContext } from "react";
import RentalCartContext from "../store/RentalCartContext";
import { Box, Button, Fade, List, Paper, Typography } from "@mui/material";
import ListItems from "../UI/ListItems";
import PropTypes from "prop-types";

function BnbShoppingCart({ displayCart }) {
  const rentalCart = useContext(RentalCartContext);

  const cartItems = rentalCart.rentals.map((rental, index) => {
    return (
      <ListItems
        key={index}
        title={rental.title}
        fee={rental.fee}
        city={rental.city}
        length={rental.numberOfDays}
      />
    );
  });

  return (
    <Fade in={true} timeout={750}>
      <Box
        minWidth="345px"
        // position={{xs: "static", sm: "relative"}}
        // paddingX={{xs: 3}}
        // top="1px"
        // right="1px"
        mt={-4}
        width="100%"
        // sx={{ zIndex: '-1'}}
      >
        <Paper sx={{ backgroundColor: "#B97E8F", padding: 5, opacity: 0.95 }}>
          <Typography
            sx={{ mt: 2, mb: 2, fontWeight: "bold" }}
            variant="h6"
            component="div"
          >
            {rentalCart.rentals.length ? `Items you added to the cart!`: `Your cart is empty. Are you sure you don't need a place to stay?`}
          </Typography>
          <List>{cartItems}</List>
          <Typography
            sx={{ mb: 2, fontWeight: "bold" }}
            variant="h6"
            component="div"
          >
            Total Amount: ${rentalCart.totalCost}
          </Typography>
          <Button variant="contained" onClick={displayCart}>
            Close Cart
          </Button>
        </Paper>
      </Box>
    </Fade>
  );
}

export default BnbShoppingCart;

BnbShoppingCart.propTypes = {
  displayCart: PropTypes.func.isRequired,
};
