import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material/";
import BnbRental from "./components/bnbRentalCard/BnbRental";
import BnbShoppingCart from "./components/BnbShoppingCart";
import NavHeader from "./UI/NavHeader";
import RentalForm from "./components/rentalForm/RentalForm";
import RentalCartProvider from "./store/RentalCartProvider";
import bnbData from "./data/bnbs.json";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7C4555",
    },
    customBg: {
      main: "#B97E8F",
      alt: "#D6EAF8",
    },
    customBtn: {
      main: "#5499C7",
    },
  },
});

function App() {
  const [availableRentals, setAvailableRentals] = useState(bnbData);
  const [displayCartFlag, setDisplayCartFlag] = useState(false);
  const [displayFormFlag, setDisplayFormFlag] = useState(false);

  const imageAltDescriptions = {
    "Centrally-located Manhattan studio": "Manhattan skyline at night.",
    "Denver apartment outside Union Station": "Main entrance of Union Station",
    "Quaint 3-bedroom home in Gamla stan":
      "White residential building with blue exterior window shutters",
  };

  const toggleCartDisplay = () => {
    if (displayFormFlag) {
      setDisplayFormFlag((prevState) => !prevState);
    }
    setDisplayCartFlag((prevState) => !prevState);
  };

  const toggleFormDisplay = () => {
    if (displayCartFlag) {
      setDisplayCartFlag((prevState) => !prevState);
    }
    setDisplayFormFlag((prevState) => !prevState);
  };

  const userAddedRentalHandler = (rentalInfo) => {
    setAvailableRentals((currentState) => {
      const updatedState = [
        ...currentState,
        {
          title: rentalInfo.title,
          houseType: rentalInfo.houseType,
          image: rentalInfo.image,
          imageAlt: rentalInfo.imageAlt,
          location: { city: rentalInfo.city, country: rentalInfo.country },
          payment: {
            cost: rentalInfo.cost,
            description: rentalInfo.description,
          },
          host: {
            name: rentalInfo.name,
            isSuperhost: rentalInfo.isSuperhost,
          },
          rating: {
            stars: 5,
            reviews: 0,
          },
        },
      ];

      return updatedState;
    });
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
  const bnbRentals = availableRentals.map((rental, index) => {
    const altText = !rental.alt
      ? imageAltDescriptions[rental.title]
      : rental.alt;

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
        <NavHeader
          displayCart={toggleCartDisplay}
          displayForm={toggleFormDisplay}
        />
        {displayCartFlag && <BnbShoppingCart displayCart={toggleCartDisplay} />}
        {displayFormFlag && (
          <RentalForm
            displayForm={toggleFormDisplay}
            userAddedRental={userAddedRentalHandler}
          />
        )}
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
