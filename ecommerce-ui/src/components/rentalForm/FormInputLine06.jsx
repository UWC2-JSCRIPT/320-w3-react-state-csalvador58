import React from "react";
import SelectInput from "./SelectInput";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";

export default function FormInputLine06({ description, onChange }) {
  return (
    <Grid item>
      <SelectInput freeCancel={description} inputChange={onChange} />
    </Grid>
  );
}

FormInputLine06.propTypes = {
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
