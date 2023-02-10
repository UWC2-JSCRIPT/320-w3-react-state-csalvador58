import React from "react";
import PropTypes from "prop-types";
import { Box, CardMedia } from "@mui/material";

function BnbRentalImage({image, imageAlt}) {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <CardMedia
        component="img"
        src={image}
        alt={imageAlt}
        sx={{
          width: "95%",
          borderRadius: "10px",
          boxShadow: "0px 8px 10px 0px rgba(0,0,0,0.75)",
        }}
      />
    </Box>
  );
}

export default BnbRentalImage;

BnbRentalImage.propTypes = {
    imageAlt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };