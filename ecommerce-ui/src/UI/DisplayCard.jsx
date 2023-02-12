import React from "react";
import { Box, Fade, Paper } from "@mui/material";
import PropTypes from "prop-types";

export default function DisplayCard({ children, cardColor }) {
  return (
    <Fade in={true} timeout={750}>
      <Box minWidth="345px" mt={-4} width="100%">
        <Paper sx={{ backgroundColor: cardColor, padding: 5, opacity: 0.95 }}>
          {children}
        </Paper>
      </Box>
    </Fade>
  );
}

DisplayCard.propTypes = {
  cardColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};
