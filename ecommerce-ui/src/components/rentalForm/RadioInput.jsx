import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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
          value="yes"
          control={<Radio />}
          label="Yes"
        />
        <FormControlLabel key="no" value="no" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
}
