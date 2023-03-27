import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Grid } from "@mui/material/";
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
          imageAlt={altText || rental.imageAlt}
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
        <Box
          sx={{
            padding: 2,
            flexGrow: 0,
            minWidth: "345px",
          }}
        >
          <Grid container spacing={2} columns={12}>
            {bnbRentals}
          </Grid>
        </Box>
      </RentalCartProvider>
    </ThemeProvider>
  );
}

export default App;
