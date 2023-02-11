import React from "react";
import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import PropTypes from "prop-types";

export default function FormInputLine05({ errorFlagsCost, value, onChange }) {
  return (
    <Grid item>
      <FormControl sx={{ width: { xs: "100%", sm: "48%" } }}>
        <InputLabel htmlFor="rental-cost">
          Total rental fees per day in USD
        </InputLabel>
        <OutlinedInput
          error={errorFlagsCost[0]}
          id="cost"
          name="cost"
          type="number"
          value={value}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Total rental fees per day in USD"
          onChange={onChange}
        />
      </FormControl>
    </Grid>
  );
}

FormInputLine05.propTypes = {
  errorFlagsCost: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
};
