import React, { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import DisplayCard from "../../UI/DisplayCard";
import RadioInput from "./RadioInput";
import SelectInput from "./SelectInput";

const defaultValues = {
  title: "",
  houseType: "",
  image: "",
  city: "",
  country: "",
  cost: 0,
  description: "",
  name: "",
  isSuperhost: false,
};

const defaultErrorState = {
  title: [false, 'Please enter a title'],
    houseType: [false, 'Please enter a rental type'],
    image: [false, 'Please enter a valid image address'],
    city: [false, 'Please enter a city'],
    country: [false, 'Please enter a country'],
    cost: [false, 'Please enter a valid amount'],
    description: false,
    name: [false, 'Please enter a host name'],
    isSuperhost: false,
}

export default function RentalForm({ displayForm }) {
  const [formValues, setFormValues] = useState(defaultValues);
  const [errorOn, setErrorOn] = useState(defaultErrorState)

  const inputChangeHandler = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setFormValues({ ...formValues, [name]: value });
  };

  // const errorOn = {
  //   title: [false, 'Please enter a title'],
  //   houseType: [false, 'Please enter a rental type'],
  //   image: [false, 'Please enter a valid image address'],
  //   city: [false, 'Please enter a city'],
  //   country: [false, 'Please enter a country'],
  //   cost: [false, 'Please enter a valid amount'],
  //   description: false,
  //   name: [false, 'Please enter a host name'],
  //   isSuperhost: false,
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formValues);

    const emptyInput = /^\s*$/;
    const isNumber = /^[0-9]+$/;

    

    emptyInput.test(formValues.title) ? setErrorOn() : false;
    errorOn.houseType[0] = emptyInput.test(formValues.houseType) ? true : false;
    errorOn.image[0] = emptyInput.test(formValues.image) ? true : false;
    errorOn.city[0] = emptyInput.test(formValues.city) ? true : false;
    errorOn.country[0] = emptyInput.test(formValues.country) ? true : false;
    errorOn.name[0] = emptyInput.test(formValues.name) ? true : false;
    errorOn.cost[0] = isNumber.test(formValues.cost) ? true : false;
    
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
          <Grid item xs={12}>
            <TextField
              error={errorOn.title[0]}
              fullWidth
              id="title"
              name="title"
              label="Rental Title"
              type="text"
              value={formValues.title}
              helperText={errorOn.title[0] ? errorOn.title[1] : "i.e. Ocean-side cottage with beach access."}
              onChange={inputChangeHandler}
            />
          </Grid>
          <Grid item container columns={12} spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                error={errorOn.name[0]}
                fullWidth
                id="name"
                name="name"
                label="Host name"
                text="text"
                value={formValues.name}
                helperText={errorOn.name[0] ? errorOn.name[1] : ""}
                onChange={inputChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <RadioInput
                inputChange={inputChangeHandler}
                superhost={formValues.isSuperhost}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                error={errorOn.houseType[0]}
                fullWidth
                id="houseType"
                name="houseType"
                label="House Type"
                type="text"
                value={formValues.houseType}
                helperText={errorOn.houseType[0] ? errorOn.houseType[1] : "i.e. House, Condo, Bedroom, etc."}
                onChange={inputChangeHandler}
              />
            </Grid>
          </Grid>

          <Grid item>
            <TextField
              error={errorOn.image[0]}
              fullWidth
              id="image"
              name="image"
              label="Image"
              type="text"
              value={formValues.image}
              helperText={errorOn.image[0] ? errorOn.image[1] : "i.e. www.imagehost/MyImage.jpeg"}
              onChange={inputChangeHandler}
            />
          </Grid>
          <Grid item container xs={12} spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                error={errorOn.city[0]}
                fullWidth
                id="city"
                name="city"
                label="City"
                type="text"
                value={formValues.city}
                helperText={errorOn.city[0] ? errorOn.city[1] : ""}
                onChange={inputChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                error={errorOn.country[0]}
                fullWidth
                id="country"
                name="country"
                label="Country"
                type="text"
                value={formValues.country}
                helperText={errorOn.country[0] ? errorOn.country[1] : ""}
                onChange={inputChangeHandler}
              />
            </Grid>
          </Grid>

          <Grid item>
            <FormControl sx={{ width: { xs: "100%", sm: "48%" } }}>
              <InputLabel htmlFor="rental-cost">
                Total rental fees per day in USD
              </InputLabel>
              <OutlinedInput
                error={errorOn.cost[0]}
                id="cost"
                name="cost"
                type="number"
                value={formValues.cost}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Total rental fees per day in USD"
                // helperText={errorOn.cost[0] ? errorOn.cost[1] : ""}
                onChange={inputChangeHandler}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <SelectInput
              freeCancel={formValues.description}
              inputChange={inputChangeHandler}
            />
          </Grid>
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
