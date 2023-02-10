import React, { useContext } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RentalCartContext from "../../store/RentalCartContext";
import PropTypes from "prop-types";

function AddToCart({ id, title, fee, city }) {
  const rentalCart = useContext(RentalCartContext);

  const onClickHandler = () => {
    rentalCart.addRental({
      title: title,
      fee: fee,
      city: city,
      numberOfDays: 1,
    });
  };

  return (
    <IconButton aria-label='add rental to cart' onClick={onClickHandler}>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <AddShoppingCartIcon title="shopping cart" fontSize="large" />
        <Typography>Add to Cart</Typography>
      </Grid>
    </IconButton>
  );
}

export default AddToCart;

AddToCart.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  fee: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};
