import React, { useState } from "react";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material/";

import CottageIcon from "@mui/icons-material/Cottage";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function NavHeader({ cartCount }) {
  const [anchorEl, setAnchorEl] = useState(null);
  // const [cartCount, setCartCount] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleAnchor = (event) => {
    // console.log('handle anchor clicked')
    setAnchorEl(event.currentTarget);
    console.log("event current target: " + event.currentTarget);
    console.log("anchorEl: " + anchorEl);
    console.log("isMenuOpen: " + isMenuOpen);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      // id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>List BnB item here</MenuItem>
      <MenuItem onClick={handleMenuClose}>Edit Cart</MenuItem>
    </Menu>
  );

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

          <Box
          //   sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <IconButton
              size="large"
              aria-label="show number of rentals in cart"
              color="inherit"
              //   onClick={handleCartOpen}
            >
              <Badge badgeContent={cartCount || 0} color="error">
                <ShoppingCartIcon onClick={handleAnchor} />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}

export default NavHeader;
