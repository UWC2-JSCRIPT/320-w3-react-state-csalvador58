import React from "react";
import { Box, List, Paper, Typography } from "@mui/material";
import bnbData from "../data/bnbs.json";
import ListItems from "../UI/ListItems";

function BnbShoppingCart() {
  const cartItems = bnbData.map((bnb, index) => {
    return (
      <ListItems
        key={index}
        title={bnb.title}
        fee={bnb.payment.cost}
        city={bnb.location.city}
      />
    );
  });

  return (
    <Box
    minWidth="345px"
      position="fixed"
      top="75px"
      right="10px"
      width={{ xs: "90%", sm:"45%"}}
      sx={{ zIndex: "5" }}
    >
      <Paper sx={{ backgroundColor: "#B97E8F", padding: 3, opacity: 0.95 }}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Items you added to the cart!
        </Typography>
        <List>{cartItems}</List>
      </Paper>
    </Box>
  );
}

export default BnbShoppingCart;
