import React from "react";
import { Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";

export default function FormInputLine03({
  errorFlagsImage,
  errorFlagsImageAlt,
  imageValue,
  imageAltValue,
  onChange,
}) {
  return (
    <Grid item container xs={12} spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <TextField
          error={errorFlagsImage[0]}
          fullWidth
          id="image"
          name="image"
          label="Image"
          type="text"
          value={imageValue}
          helperText={
            errorFlagsImage[0]
              ? errorFlagsImage[1]
              : "i.e. www.imagehost/MyImage.jpeg"
          }
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <TextField
          error={errorFlagsImage[0]}
          fullWidth
          id="image description"
          name="imageAlt"
          label="Description of image"
          type="text"
          value={imageAltValue}
          helperText={
            errorFlagsImageAlt[0]
              ? errorFlagsImageAlt[1]
              : "i.e. Blue home front garden"
          }
          onChange={onChange}
        />
      </Grid>
    </Grid>
  );
}

FormInputLine03.propTypes = {
  errorFlagsImage: PropTypes.array.isRequired,
  errorFlagsImageAlt: PropTypes.array.isRequired,
  imageValue: PropTypes.string.isRequired,
  imageAltValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
