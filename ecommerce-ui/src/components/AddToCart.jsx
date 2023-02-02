import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function AddToCart() {
  return (
    <IconButton>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <AddShoppingCartIcon fontSize="large" />
        <Typography>Add to Cart</Typography>
      </Grid>
    </IconButton>
  );
}

export default AddToCart;
