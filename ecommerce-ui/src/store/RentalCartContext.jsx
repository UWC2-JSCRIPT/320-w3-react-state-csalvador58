import React from "react";

const RentalCartContext = React.createContext({
  rentals: [],
  totalCost: 0,
  addRental: () => {},
  removeRental: () => {},
});

export default RentalCartContext;
