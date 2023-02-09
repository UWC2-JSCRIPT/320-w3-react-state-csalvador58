import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";

export default function ListItems({ title, fee, city }) {
  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText
          primary={`${title} - $${fee}/day`}
          secondary={true ? city : null}
        />
      </ListItem>
    </>
  );
}

ListItems.propTypes = {
  title: PropTypes.string.isRequired,
  fee: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};
