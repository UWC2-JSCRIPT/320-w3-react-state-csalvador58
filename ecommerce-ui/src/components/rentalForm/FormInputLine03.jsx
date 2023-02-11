import React from "react";
import { Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";

export default function FormInputLine03({ errorFlagsImage, value, onChange }) {
  return (
    <Grid item>
      <TextField
        error={errorFlagsImage[0]}
        fullWidth
        id="image"
        name="image"
        label="Image"
        type="text"
        value={value}
        helperText={
          errorFlagsImage[0]
            ? errorFlagsImage[1]
            : "i.e. www.imagehost/MyImage.jpeg"
        }
        onChange={onChange}
      />
    </Grid>
  );
}

FormInputLine03.propTypes = {
  errorFlagsImage: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
