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
  ".pending-ticket-outer-box": {
    backgroundImage: "url('/images/ticket-img.png')",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    padding: "15px 20px",
    textTransform: "uppercase",
    "& p": {
      color: "#fff",
    },
    "& span": {
      fontWeight: "600",
    },
  },
  ".departed-pending-inner-box": {
    borderTop: "1px dashed #fff",
    borderBottom: "1px dashed #ffff",
    padding: "10px 0px",
    margin: "15px 0px",
  },
});

const pendingticketsdata = [
  {
    id: "1",
    ticket_name: "BELLPORT-WEST SAYVILLE",
    departed: "departed on",
    date: "fri jul 05 2024",
    no_of_tickets: "no.of tickets:",
    ticket_no:'31'
  },
  {
    id: "2",
    ticket_name: "Bell Caves-Bellport",
    departed: "departed on",
    date: "Wed Mar 06 2024",
    no_of_tickets: "no.of tickets:",
    ticket_no:'6'
  },
  {
    id: "3",
    ticket_name: "Bellport-Blue Point",
    departed: "departed on",
    date: "Tue Apr 02 2024",
    no_of_tickets: "no.of tickets:",
    ticket_no:'4'
  },
];

function Cancelled_Tickets() {
  return (
    <>
      
     
      <PendingTicketsWrapper>
        <Container sx={{ maxWidth: "768px!important" }}>
          <Grid container spacing={4}>
            {pendingticketsdata ? (
              <>
                {pendingticketsdata.map((data) => (
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Box className="pending-ticket-outer-box">
                      <Link to="">
                        <Typography variant="h5">
                          {data.ticket_name}
                        </Typography>
                        <Box className="departed-pending-inner-box">
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "600" }}
                          >
                           {data.departed}
                          </Typography>
                          <Typography variant="body1" pt={1}>
                           {data.date}
                          </Typography>
                        </Box>
                        <Typography variant="body1">
                         {data.no_of_tickets} <span>{data.ticket_no}</span>
                        </Typography>
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </>
            ) : (
              <>
                <Box className="no-tickets-found-wrappper">
                  <Typography variant="body1">Not Found Any Tickets</Typography>
                </Box>
              </>
            )}
          </Grid>
        </Container>
      </PendingTicketsWrapper>
  
    </>
  );
}
export default Cancelled_Tickets;
