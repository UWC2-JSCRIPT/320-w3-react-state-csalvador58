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
  location: {
    city: "",
    country: "",
  },
  payment: {
    cost: 0,
    description: "",
  },
  host: {
    name: "",
    isSuperhost: false,
  },
  rating: {
    stars: "",
    reviews: "",
  },
};

export default function RentalForm({ displayForm }) {
  const [formValues, setFormValues] = useState(defaultValues);

  const inputChangeHandler = (event) => {
    console.log(event);
    const { input, value } = event.target;
    setFormValues({ ...formValues, [input]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <DisplayCard cardColor="customBg.alt">
      <form onSubmit={submitHandler}>
        <Typography
          sx={{ mt: 2, mb: 2, fontWeight: "bold" }}
          variant="h6"
          component="div"
        >
          Enter Your Rental
        </Typography>
        <Grid container spacing={2} direction="column" columns={12}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="title"
              name="rental-title"
              label="Rental Title"
              type="text"
              value={formValues.title}
              defaultValue=""
              helperText="i.e. Ocean-side cottage with beach access."
              onChange={inputChangeHandler}
            />
          </Grid>
          <Grid item container columns={12} spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                fullWidth
                id="host"
                name="host"
                label="Host name"
                text="text"
                value={formValues.host.name}
                defaultValue=""
                helperText=""
                onChange={inputChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <RadioInput
                inputChange={inputChangeHandler}
                superhost={formValues.host.isSuperhost}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                fullWidth
                id="housetype"
                name="house-type"
                label="House Type"
                type="text"
                value={formValues.houseType}
                defaultValue=""
                helperText="i.e. House, Condo, Bedroom, etc."
                onChange={inputChangeHandler}
              />
            </Grid>
          </Grid>

          <Grid item>
            <TextField
              fullWidth
              id="image"
              name="image"
              label="Image"
              type="text"
              value={formValues.image}
              defaultValue=""
              helperText="i.e. www.imagehost/MyImage.jpeg"
              onChange={inputChangeHandler}
            />
          </Grid>
          <Grid item container xs={12} spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                fullWidth
                id="city"
                name="city"
                label="City"
                type="text"
                value={formValues.location.city}
                defaultValue=""
                helperText=""
                onChange={inputChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <TextField
                fullWidth
                id="country"
                name="country"
                label="Country"
                type="text"
                value={formValues.location.country}
                defaultValue=""
                helperText=""
                onChange={inputChangeHandler}
              />
            </Grid>
          </Grid>

          <Grid item>
            <FormControl sx={{width: '50vw'}}>
              <InputLabel htmlFor="rental-cost">
                Total rental fees per day in USD
              </InputLabel>
              <OutlinedInput
                id="cost"
                name="cost"
                type="number"
                value={formValues.payment.cost}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Total rental fees per day in USD"
                onChange={inputChangeHandler}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <SelectInput
              freeCancel={formValues.payment.description}
              inputChange={inputChangeHandler}
            />
          </Grid>
        </Grid>
        <Button variant="contained" type="submit" sx={{margin: '2rem'}}>
          Submit
        </Button>
        <Button color="customBtn" variant="contained" onClick={displayForm}>
          Close Form
        </Button>
      </form>
    </DisplayCard>
  );
}
