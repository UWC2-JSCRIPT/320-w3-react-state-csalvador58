import { useState, useEffect } from "react";
import RentalCartContext from "./RentalCartContext";
import PropTypes from "prop-types";

export default function RentalCartProvider({ children }) {
  const [rentalsInCart, setRentalsInCart] = useState([]);
  const [totalInCart, setTotalInCart] = useState(0);

  const addRentalToCart = (rental) => {
    setRentalsInCart((prev) => [...prev, rental]);
  };

  const removeRentalFromCart = (rentalId) => {};

  // useEffect hook is used to update total cart amount state when rentals in cart changes.
  useEffect(() => {
    const rentalCartTotal = rentalsInCart.reduce((total, rental) => {
      return total + rental.fee;
    }, 0);

    setTotalInCart(rentalCartTotal);
  }, [rentalsInCart]);

  const rentalCartContext = {
    rentals: rentalsInCart,
    totalCost: totalInCart,
    addRental: addRentalToCart,
    removeRental: removeRentalFromCart,
  };

  return (
    <RentalCartContext.Provider value={rentalCartContext}>
      {children}
    </RentalCartContext.Provider>
  );
}

RentalCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
