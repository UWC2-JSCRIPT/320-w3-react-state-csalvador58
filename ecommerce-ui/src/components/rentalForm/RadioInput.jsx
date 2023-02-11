import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export default function RadioInput({ inputChange, superhost }) {
  return (
    <FormControl>
      <FormLabel id="isSuperhost">Will host be a Superhost?</FormLabel>
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
