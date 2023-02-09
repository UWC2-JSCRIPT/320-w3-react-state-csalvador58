// import logo from './logo.svg';
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Grid } from "@mui/material/";
import BnbRental from "./components/BnbRental";
import BnbShoppingCart from "./components/BnbShoppingCart";
import GridContainer from "./UI/GridContainer";
import NavHeader from "./layout/NavHeader";
import RentalCartProvider from "./store/RentalCartProvider";
import bnbData from "./data/bnbs.json";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7C4555",
    },
  },
});

function App() {
  const [displayCartFlag, setDisplayCartFlag] = useState(false);

  const displayCart = () => {
    setDisplayCartFlag((prevState) => !prevState);
  };

  // App requirements
  // At minimum, your UI should display each Bnb's:
  // Title
  // Image
  // Location
  // Payment information

  // Your UI code should:
  // Utilize at least one component to render each Bnb. An example name for this component could be VacationRental.
  // Use the appropriate loops/conditionals to map and display components.
  // Use propTypes to define props for each component, if any.

  // Offers a "Shopping Cart" functionality where you can add a vacation rental to a shopping cart. This shopping cart should...
  // Be displayed next to the vacation rentals
  // Allow the user to remove a vacation rental from the cart if they change their mind
  // Display the total payment due based on the vacation rentals in the cart
  // In order to facilitate the "Shopping Cart" functionality, each vacation rental should have a button that allows the user to add a vacation rental to the shopping cart.
  const bnbRentals = bnbData.map((rental, index) => {
    return (
      <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={3}>
        <BnbRental
          id={index}
          imageAlt="null"
          houseType={rental.houseType}
          image={rental.image}
          location={rental.location}
          paymentInfo={rental.payment}
          stars={rental.rating.stars}
          title={rental.title}
        />
      </Grid>
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <RentalCartProvider>
        <NavHeader displayCart={displayCart} />
        {displayCartFlag && <BnbShoppingCart displayCart={displayCart} />}
        <GridContainer spacing={2} columns={12}>
          {bnbRentals}
        </GridContainer>
      </RentalCartProvider>
    </ThemeProvider>
  );
}

export default App;
