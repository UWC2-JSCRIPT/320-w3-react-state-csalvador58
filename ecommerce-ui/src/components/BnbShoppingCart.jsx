import React, { useContext } from "react";
import RentalCartContext from "../store/RentalCartContext";
import { Button, List, Typography } from "@mui/material";
import RentalsInCart from "./RentalsInCart";
import PropTypes from "prop-types";
import DisplayCard from "../UI/DisplayCard";

function BnbShoppingCart({ displayCart }) {
  const rentalCart = useContext(RentalCartContext);

  const cartItems = rentalCart.rentals.map((rental, index) => {
    return (
      <RentalsInCart
        key={index}
        title={rental.title}
        fee={rental.fee}
        city={rental.city}
        length={rental.numberOfDays}
      />
    );
  });

  return (
    <DisplayCard cardColor="customBg.main">
      <Typography
        sx={{ mt: 2, mb: 2, fontWeight: "bold" }}
        variant="h6"
        component="div"
      >
        {rentalCart.rentals.length
          ? `Items you added to the cart!`
          : `Your cart is empty. Are you sure you don't need a place to stay?`}
      </Typography>
      <List>{cartItems}</List>
      <Typography
        sx={{ mb: 2, fontWeight: rentalCart.totalCost ? "bold" : "light" }}
        variant="h6"
        component="div"
      >
        Total Amount: ${rentalCart.totalCost}
      </Typography>
      <Button variant="contained" onClick={displayCart}>
        Close Cart
      </Button>
    </DisplayCard>
  );
}

export default BnbShoppingCart;

BnbShoppingCart.propTypes = {
  displayCart: PropTypes.func.isRequired,
};
