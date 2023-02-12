import React from "react";
import { Box, FormControl, FormLabel, MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";

export default function SelectInput({ freeCancel, inputChange }) {
  return (
    <FormControl sx={{ width: { xs: "100%", sm: "48%" } }}>
      <FormLabel>
        Offer free cancellation?
        <Box component="span" fontStyle="italic">
          (Optional)
        </Box>
      </FormLabel>
      <Select name="description" value={freeCancel} onChange={inputChange}>
        <MenuItem key="yes" value="Free cancellation">
          Yes
        </MenuItem>
        <MenuItem key="no" value=" ">
          No
        </MenuItem>
        <MenuItem key="other" value="Limited cancellation">
          Limited cancellation
        </MenuItem>
      </Select>
    </FormControl>
  );
}

SelectInput.propTypes = {
  freeCancel: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
};
