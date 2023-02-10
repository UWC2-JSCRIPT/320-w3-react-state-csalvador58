import { useState, useEffect } from "react";
import RentalCartContext from "./RentalCartContext";
import PropTypes from "prop-types";

export default function RentalCartProvider({ children }) {
  const [rentalsInCart, setRentalsInCart] = useState([]);
  const [totalInCart, setTotalInCart] = useState(0);

  const addRentalToCart = (newRental) => {
    setRentalsInCart((currentRentals) => {
      const rentalIndex = currentRentals.findIndex(
        (bnb) => bnb.title === newRental.title
      );
      // console.log(rentalIndex);
      if (rentalIndex < 0) {
        console.log("Rental does not exist");

        return [...currentRentals, newRental];
      } else {
        const updateState = [...currentRentals];
        updateState[rentalIndex].numberOfDays += 1;
        // console.log(updateState);
        return updateState;
      }
    });
  };

  const removeRentalFromCart = (rental) => {
    setRentalsInCart((currentRentals) => {
      const rentalIndex = currentRentals.findIndex(
        (bnb) => bnb.title === rental
      );
      const updateState = [...currentRentals];
      updateState.splice(rentalIndex, 1);
      return updateState;
    });
  };

  // useEffect hook is used to update total cart amount state when rentals in cart changes.
  useEffect(() => {
    const rentalCartTotal = rentalsInCart.reduce((total, rental) => {
      return total + rental.fee * rental.numberOfDays;
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
