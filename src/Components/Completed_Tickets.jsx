import React from "react";
import { Container, Box, Typography, styled, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const PendingTicketsWrapper = styled("div")({
  padding: "50px 0px",
  ".no-tickets-found-wrappper": {
    background: "#fdfdfd",
    textAlign: "center",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 15px #ccccccbd",
  },
});

function Completed_Tickets() {
  return (
    <>
      <PendingTicketsWrapper>
        <Container sx={{ maxWidth: "768px!important" }}>
          <Box className="no-tickets-found-wrappper">
            <Typography variant="body1">Not Found Any Completed Tickets</Typography>
          </Box>
        </Container>
      </PendingTicketsWrapper>
    </>
  );
}
export default Completed_Tickets;
