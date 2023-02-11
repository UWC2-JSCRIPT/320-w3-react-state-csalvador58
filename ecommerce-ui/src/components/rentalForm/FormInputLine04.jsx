import React from "react";
import { Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";

export default function FormInputLine04({
  errorFlagsCity,
  errorFlagsCountry,
  cityValue,
  countryValue,
  onChange,
}) {
  return (
    <Grid item container xs={12} spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <TextField
          error={errorFlagsCity[0]}
          fullWidth
          id="city"
          name="city"
          label="City"
          type="text"
          value={cityValue}
          helperText={errorFlagsCity[0] ? errorFlagsCity[1] : ""}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <TextField
          error={errorFlagsCountry[0]}
          fullWidth
          id="country"
          name="country"
          label="Country"
          type="text"
          value={countryValue}
          helperText={errorFlagsCountry[0] ? errorFlagsCountry[1] : ""}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  );
}

FormInputLine04.propTypes = {
  errorFlagsCity: PropTypes.array.isRequired,
  errorFlagsCountry: PropTypes.array.isRequired,
  cityValue: PropTypes.string.isRequired,
  countryValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
