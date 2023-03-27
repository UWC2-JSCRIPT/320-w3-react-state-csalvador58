import React from "react";
import { Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";

export default function FormInputLine01({ errorFlagsTitle, value, onChange }) {
  return (
    <Grid item xs={12}>
      <TextField
        error={errorFlagsTitle[0]}
        fullWidth
        id="title"
        name="title"
        label="Rental Title"
        type="text"
        value={value}
        helperText={
          errorFlagsTitle[0]
            ? errorFlagsTitle[1]
            : "i.e. Ocean-side cottage with beach access."
        }
        onChange={onChange}
      />
    </Grid>
  );
}

FormInputLine01.propTypes = {
  errorFlagsTitle: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
