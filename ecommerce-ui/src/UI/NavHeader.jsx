import React, { useContext } from "react";
import RentalCartContext from "../store/RentalCartContext";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material/";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CottageIcon from "@mui/icons-material/Cottage";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PropTypes from "prop-types";

function NavHeader({ displayCart, displayForm }) {
  const rentalCart = useContext(RentalCartContext);
  const numberOfRentalsInCart = rentalCart.rentals.length;

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 3, minWidth: "360px" }}>
      <AppBar position="static">
        <Toolbar>
          <CottageIcon
            aria-hidden="false"
            aria-label="Cottage Icon"
            role="img"
            title="Cottage Icon"
          />
          <Typography
            paddingLeft={2}
            variant="h6"
            noWrap
            component="h1"
            sx={{ display: { xs: "block" } }}
          >
            BnB Rentals
          </Typography>

          {/* Box will align cart icon to right of screen */}
          <Box sx={{ flexGrow: 1 }} />

          <Box>
            <Tooltip title="Add Rental">
              <IconButton
                size="large"
                aria-label="add a rental to rent out"
                color="inherit"
                onClick={displayForm}
              >
                <AddBusinessIcon
                  aria-hidden="false"
                  aria-label="Add Business Icon"
                  role="img"
                  title="Add Business Icon"
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip title="Show Cart">
              <IconButton
                size="large"
                aria-label="show number of rentals in cart"
                color="inherit"
                onClick={displayCart}
              >
                <Badge badgeContent={numberOfRentalsInCart} color="error">
                  <ShoppingCartIcon
                    aria-hidden="false"
                    aria-label="Shopping Cart Icon"
                    role="img"
                    title="Shopping Cart Icon"
                  />
                </Badge>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavHeader;

NavHeader.propTypes = {
  displayCart: PropTypes.func.isRequired,
  displayForm: PropTypes.func.isRequired,
};
