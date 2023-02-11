import React from "react";
import { Grid, TextField } from "@mui/material";
import RadioInput from "./RadioInput";
import PropTypes from "prop-types";

export default function FormInputLine02({
  errorFlagsName,
  errorFlagsType,
  nameValue,
  onChange,
  superhost,
  type,
}) {
  return (
    <Grid item container columns={12} spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <TextField
          error={errorFlagsName[0]}
          fullWidth
          id="name"
          name="name"
          label="Host name"
          text="text"
          value={nameValue}
          helperText={errorFlagsName[0] ? errorFlagsName[1] : ""}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <RadioInput inputChange={onChange} superhost={superhost} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <TextField
          error={errorFlagsType[0]}
          fullWidth
          id="houseType"
          name="houseType"
          label="House Type"
          type="text"
          value={type}
          helperText={
            errorFlagsType[0]
              ? errorFlagsType[1]
              : "i.e. House, Condo, Bedroom, etc."
          }
          onChange={onChange}
        />
      </Grid>
    </Grid>
  );
}

FormInputLine02.propTypes = {
  errorFlagsName: PropTypes.array.isRequired,
  errorFlagsType: PropTypes.array.isRequired,
  nameValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  superhost: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};
