import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material/";
import BnbRental from "./components/bnbRentalCard/BnbRental";
import BnbShoppingCart from "./components/BnbShoppingCart";
import NavHeader from "./UI/NavHeader";
import RentalCartProvider from "./store/RentalCartProvider";
import bnbData from "./data/bnbs.json";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7C4555",
    },
    custom: {
      background: "#B97E8F",
    },
  },
});

function App() {
  const [displayCartFlag, setDisplayCartFlag] = useState(false);

  const imageAltDescriptions = {
    "Centrally-located Manhattan studio": "Manhattan skyline at night.",
    "Denver apartment outside Union Station": "Main entrance of Union Station",
    "Quaint 3-bedroom home in Gamla stan":
      "White residential building with blue exterior window shutters",
  };

  const toggleDisplay = () => {
    setDisplayCartFlag((prevState) => !prevState);
  };

  // App requirements
  // done - At minimum, your UI should display each Bnb's:
  // done - Title
  // done - Image
  // done - Location
  // done - Payment information

  // Your UI code should:
  // done - Utilize at least one component to render each Bnb. An example name for this component could be VacationRental.
  // done - Use the appropriate loops/conditionals to map and display components.
  // done - Use propTypes to define props for each component, if any.

  // done - Offers a "Shopping Cart" functionality where you can add a vacation rental to a shopping cart. This shopping cart should...
  // done - Be displayed next to the vacation rentals
  // done - Allow the user to remove a vacation rental from the cart if they change their mind
  // done - Display the total payment due based on the vacation rentals in the cart
  // done - In order to facilitate the "Shopping Cart" functionality, each vacation rental should have a button that allows the user to add a vacation rental to the shopping cart.
  const bnbRentals = bnbData.map((rental, index) => {
    const altText = !rental.alt ? imageAltDescriptions[rental.title] : rental.alt;

    return (
      <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={3}>
        <BnbRental
          id={index}
          houseType={rental.houseType}
          image={rental.image}
          imageAlt={altText}
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
        <NavHeader displayCart={toggleDisplay} />
        {displayCartFlag && <BnbShoppingCart displayCart={toggleDisplay} />}
        <Paper
          sx={{
            padding: 2,
            flexGrow: 0,
            elevation: 0,
            minWidth: "345px",
          }}
        >
          <Grid container spacing={2} columns={12}>
            {bnbRentals}
          </Grid>
        </Paper>
      </RentalCartProvider>
    </ThemeProvider>
  );
}

export default App;
