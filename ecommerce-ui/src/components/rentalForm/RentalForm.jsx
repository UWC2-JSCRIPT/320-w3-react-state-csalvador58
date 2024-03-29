import React, { useState } from "react";
import DisplayCard from "../../UI/DisplayCard";
import FormInputLine01 from "./FormInputLine01";
import FormInputLine02 from "./FormInputLine02";
import FormInputLine03 from "./FormInputLine03";
import FormInputLine04 from "./FormInputLine04";
import FormInputLine05 from "./FormInputLine05";
import FormInputLine06 from "./FormInputLine06";
import { Button, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";

const defaultFormValues = {
  title: "",
  houseType: "",
  image: "",
  imageAlt: "",
  city: "",
  country: "",
  cost: "",
  description: "",
  name: "",
  isSuperhost: false,
};

const defaultErrorState = {
  title: [false, "Please enter a title"],
  houseType: [false, "Please enter a rental type"],
  image: [false, "Please enter a valid image address"],
  imageAlt: [false, "Please enter a valid image description"],
  city: [false, "Please enter a city"],
  country: [false, "Please enter a country"],
  cost: [false, "Please enter a valid amount"],
  name: [false, "Please enter a host name"],
  // Optional user inputs
  description: false,
  isSuperhost: false,
};

export default function RentalForm({ displayForm, userAddedRental }) {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [errorFlags, setErrorFlags] = useState(defaultErrorState);

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormValues((currentState) => {
      const updateState = { ...currentState };
      if (name === "cost") {
        updateState[name] = +value;
      } else updateState[name] = value;
      return updateState;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // For regex input tests
    const emptyInput = /^\s*$/;

    // Init values
    const errorCheck = {
      title: false,
      houseType: false,
      image: false,
      imageAlt: false,
      city: false,
      country: false,
      cost: false,
      name: false,
    };

    // Complete error checks on form inputs
    errorCheck.title = emptyInput.test(formValues.title) ? true : false;
    errorCheck.houseType = emptyInput.test(formValues.houseType) ? true : false;
    errorCheck.image = emptyInput.test(formValues.image) ? true : false;
    errorCheck.imageAlt = emptyInput.test(formValues.imageAlt) ? true : false;
    errorCheck.city = emptyInput.test(formValues.city) ? true : false;
    errorCheck.country = emptyInput.test(formValues.country) ? true : false;
    errorCheck.cost = emptyInput.test(formValues.cost) ? true : false;
    errorCheck.name = emptyInput.test(formValues.name) ? true : false;

    if (Object.values(errorCheck).includes(true)) {
      setErrorFlags({
        ...errorFlags,
        title: [errorCheck.title, errorFlags.title[1]],
        houseType: [errorCheck.houseType, errorFlags.houseType[1]],
        image: [errorCheck.image, errorFlags.image[1]],
        imageAlt: [errorCheck.imageAlt, errorFlags.imageAlt[1]],
        city: [errorCheck.city, errorFlags.city[1]],
        country: [errorCheck.country, errorFlags.country[1]],
        cost: [errorCheck.cost, errorFlags.cost[1]],
        name: [errorCheck.name, errorCheck.name[1]],
      });
      // Form will not be submitted
      return;
    }
    // Checks pass, submit form
    userAddedRental(formValues);
    setFormValues(defaultFormValues);
  };

  return (
    <DisplayCard cardColor="customBg.alt">
      <form onSubmit={submitHandler}>
        <Typography
          sx={{ mt: 2, mb: 2, fontWeight: "bold" }}
          variant="h6"
          component="div"
        >
          Have a place to rent out? Enter your rental information below.
        </Typography>
        <Grid container spacing={2} direction="column" columns={12}>
          <FormInputLine01
            errorFlagsTitle={errorFlags.title}
            value={formValues.title}
            onChange={inputChangeHandler}
          />

          <FormInputLine02
            errorFlagsName={errorFlags.name}
            errorFlagsType={errorFlags.houseType}
            nameValue={formValues.name}
            onChange={inputChangeHandler}
            superhost={formValues.isSuperhost}
            type={formValues.houseType}
          />

          <FormInputLine03
            errorFlagsImage={errorFlags.image}
            errorFlagsImageAlt={errorFlags.imageAlt}
            imageValue={formValues.image}
            imageAltValue={formValues.imageAlt}
            onChange={inputChangeHandler}
          />
          <FormInputLine04
            errorFlagsCity={errorFlags.city}
            errorFlagsCountry={errorFlags.country}
            cityValue={formValues.city}
            countryValue={formValues.country}
            onChange={inputChangeHandler}
          />

          <FormInputLine05
            errorFlagsCost={errorFlags.cost}
            value={formValues.cost}
            onChange={inputChangeHandler}
          />
          <FormInputLine06
            description={formValues.description}
            onChange={inputChangeHandler}
          />
        </Grid>
        <Button
          color="customBtn"
          variant="contained"
          type="submit"
          sx={{ margin: "2rem 2rem 2rem 0" }}
        >
          Submit Rental
        </Button>
        <Button variant="contained" onClick={displayForm}>
          Close Form
        </Button>
      </form>
    </DisplayCard>
  );
}

RentalForm.propTypes = {
  displayForm: PropTypes.func.isRequired,
  userAddedRental: PropTypes.func.isRequired,
};
