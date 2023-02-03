import React, { useState } from "react";
import { Box, Button, Fade, List, Paper, Typography } from "@mui/material";
import bnbData from "../data/bnbs.json";
import ListItems from "../UI/ListItems";

function BnbShoppingCart({ displayCart }) {
  const [cartTotal, setCartTotal] = useState(0);
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
    <Fade in="true" timeout={750}>
      <Box
        minWidth="345px"
        // position={{xs: "static", sm: "relative"}}
        // paddingX={{xs: 3}}
        // top="1px"
        // right="1px"
        mt={-4}
        width='100%'
        // sx={{ zIndex: '-1'}}
      >
        <Paper sx={{ backgroundColor: "#B97E8F", padding: 5, opacity: 0.95 }}>
          <Typography sx={{ mt: 2, mb: 2, fontWeight: 'bold'}} variant="h6" component="div">
            Items you added to the cart!
          </Typography>
          <List>{cartItems}</List>
          <Typography sx={{ mb: 2, fontWeight: 'bold'}} variant="h6" component="div">
            Total Amount: ${cartTotal}
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
