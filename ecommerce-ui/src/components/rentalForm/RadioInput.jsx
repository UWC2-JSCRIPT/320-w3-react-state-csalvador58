import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import PropTypes from "prop-types";

export default function RadioInput({ inputChange, superhost }) {
  return (
    <FormControl>
      <FormLabel id="isSuperhost">Is host a Superhost?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="is-superhost"
        name="isSuperhost"
        value={superhost}
        onChange={inputChange}
      >
        <FormControlLabel
          key="yes"
          value="true"
          control={<Radio />}
          label="Yes"
        />
        <FormControlLabel
          key="no"
          value="false"
          control={<Radio />}
          label="No"
        />
      </RadioGroup>
    </FormControl>
  );
}

RadioInput.propTypes = {
  inputChange: PropTypes.func.isRequired,
  superhost: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
