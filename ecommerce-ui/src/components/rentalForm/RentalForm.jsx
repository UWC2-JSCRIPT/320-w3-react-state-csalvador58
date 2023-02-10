import React from "react";
import { Button, Typography } from "@mui/material";
import DisplayCard from "../../UI/DisplayCard";

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
      <Button color="customBtn" variant="contained" onClick={displayForm}>
        Close Form
      </Button>
    </DisplayCard>
  );
}
