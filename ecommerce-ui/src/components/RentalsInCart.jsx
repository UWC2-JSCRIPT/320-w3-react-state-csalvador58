import React, { useContext } from "react";
import RentalCartContext from "../store/RentalCartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";
import { Fade } from "@mui/material";

export default function RentalsInCart({ title, fee, city, length }) {
  const rentalCart = useContext(RentalCartContext);

  const onClickHandler = () => {
    if (
      window.confirm(`Are you sure you want to remove the following rental from your cart? 
    *** ${title} ***`)
    ) {
      rentalCart.removeRental(title);
    } else alert("No changes were made to your cart.");
  };

  return (
    <>
      <Fade in={true} timeout={500}>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={onClickHandler}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={`${title} - ${city}`}
            secondary={`$${fee}/day, Days requested: ${length} `}
          />
        </ListItem>
      </Fade>
    </>
  );
}

RentalsInCart.propTypes = {
  title: PropTypes.string.isRequired,
  fee: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
};
