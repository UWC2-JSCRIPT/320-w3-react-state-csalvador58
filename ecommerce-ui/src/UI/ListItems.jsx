import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";


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
