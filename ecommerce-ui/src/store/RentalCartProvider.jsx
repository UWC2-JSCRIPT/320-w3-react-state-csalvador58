import RentalCartContext from "./RentalCartContext";

export default function RentalCartProvider({ children }) {
  const addRentalToCart = (rental) => {};

  const removeRentalFromCart = (rentalId) => {};

  const rentalCartContext = {
    rentals: [],
    totalCost: 0,
    addRental: addRentalToCart,
    removeRental: removeRentalFromCart,
  };

  return (
    <RentalCartContext.Provider value={rentalCartContext}>
      {children}
    </RentalCartContext.Provider>
  );
}
