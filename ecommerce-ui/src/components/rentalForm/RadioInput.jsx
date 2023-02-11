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
      <FormLabel id="isSuperhost">
        Will host be a Superhost?{" "}
        <Box component="span" fontStyle="italic">
          (Optional)
        </Box>
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="is-superhost"
        name="isSuperhost"
        value={superhost}
        onChange={inputChange}
      >
        <FormControlLabel
          key="yes"
          value="yes"
          control={<Radio />}
          label="Yes"
        />
        <FormControlLabel key="no" value="no" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
}
