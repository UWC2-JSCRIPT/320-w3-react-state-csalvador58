import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioInput() {
  return (
    <FormControl>
      <FormLabel id="superhost">Will host be a Superhost?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Yes" control={<Radio />} label="yes" />
        <FormControlLabel value="No" control={<Radio />} label="no" />
      </RadioGroup>
    </FormControl>
  );
}
