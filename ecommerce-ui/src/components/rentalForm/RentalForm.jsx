import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import DisplayCard from "../../UI/DisplayCard";
import RadioInput from "./RadioInput";

export default function RentalForm({ displayForm }) {
  return (
    <DisplayCard cardColor="customBg.alt">
      <Typography
        sx={{ mt: 2, mb: 2, fontWeight: "bold" }}
        variant="h6"
        component="div"
      >
        Enter Your Rental
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "75vw" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="title"
            label="Rental Title"
            defaultValue=""
            helperText="i.e. Ocean-side cottage with beach access."
          />
          <TextField
            id="housetype"
            label="House Type"
            defaultValue=""
            helperText="i.e. House, Condo, Bedroom, etc."
          />
          <TextField
            id="host"
            label="Host name"
            defaultValue=""
            helperText=""
          />
          <RadioInput />
          <TextField
            id="image"
            label="Image"
            defaultValue=""
            helperText="i.e. www.imagehost/MyImage.jpeg"
          />
          <TextField id="city" label="City" defaultValue="" helperText="" />
          <TextField
            id="country"
            label="Country"
            defaultValue=""
            helperText=""
          />

          <FormControl sx={{ m: 1, width: "75vw" }}>
            <InputLabel htmlFor="rental-cost">
              Total rental fees per day in USD
            </InputLabel>
            <OutlinedInput
              id="cost"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Total rental fees per day in USD"
            />
          </FormControl>
        </div>
      </Box>
      <Button color="customBtn" variant="contained" onClick={displayForm}>
        Close Form
      </Button>
    </DisplayCard>
  );
}
