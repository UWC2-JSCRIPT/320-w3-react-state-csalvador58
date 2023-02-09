import React from "react";
import PropTypes from "prop-types";

const RentalCartContext = React.createContext({
  rentals: [],
  totalCost: 0,
  addRental: () => {},
  removeRental: () => {},
});

export default RentalCartContext;

RentalCartContext.PropTypes = {
  rentals: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalCost: PropTypes.number.isRequired,
  addRental: PropTypes.func.isRequired,
  removeRental: PropTypes.func.isRequired,
};
