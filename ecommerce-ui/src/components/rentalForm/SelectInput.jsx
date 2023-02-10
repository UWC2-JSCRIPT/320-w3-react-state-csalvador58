import { FormControl, FormLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function SelectInput({ freeCancel, inputChange }) {
  return (
    <FormControl sx={{ width: { xs: "100%", sm: "48%" } }}>
      <FormLabel>Offer free cancellation?</FormLabel>
      <Select name="description" value={freeCancel} onChange={inputChange}>
        <MenuItem key="yes" value="free cancellation">
          Yes
        </MenuItem>
        <MenuItem key="no" value="">
          No
        </MenuItem>
        <MenuItem key="other" value="Contact to discuss cancellation options">
          Contact to discuss cancellation options.
        </MenuItem>
      </Select>
    </FormControl>
  );
}
