import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function AddToCart({ id, cartButtonAction }) {
  const onClickHandler = () => {
    cartButtonAction(id)
  }

  return (
    <IconButton onClick={() => onClickHandler()}>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <AddShoppingCartIcon fontSize="large" />
        <Typography >Add to Cart</Typography>
      </Grid>
    </IconButton>
  );
}

export default AddToCart;
