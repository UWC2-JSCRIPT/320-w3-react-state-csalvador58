import React from "react";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material/";

import CottageIcon from "@mui/icons-material/Cottage";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function NavHeader({ cartCount, displayCart }) {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 3, minWidth: "360px" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: "none", sm: "flex" } }}
          >
            <CottageIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block" } }}
          >
            BnB Rentals
          </Typography>

          {/* Box will align cart icon to right of screen */}
          <Box sx={{ flexGrow: 1 }} />

          <Box>
            <IconButton
              size="large"
              aria-label="show number of rentals in cart"
              color="inherit"
            >
              <Badge badgeContent={cartCount || 0} color="error">
                <ShoppingCartIcon onClick={displayCart} />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavHeader;
