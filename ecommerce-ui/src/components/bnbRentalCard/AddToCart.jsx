import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PropTypes from "prop-types";

function AddToCart({ id, title, fee, city, addToCartHandler }) {
  return (
    <IconButton aria-label="add rental to cart" onClick={addToCartHandler}>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <AddShoppingCartIcon
          sx={{ fontSize: 25 }}
          title="shopping cart"
          fontSize="large"
          aria-hidden="false"
          aria-label="Shopping Cart Icon"
          role="img"
        />
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
  addToCartHandler: PropTypes.func.isRequired,
};
