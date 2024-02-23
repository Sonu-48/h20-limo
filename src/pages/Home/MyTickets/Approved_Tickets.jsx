import React from "react";
import { Container, Box, Typography, styled } from "@mui/material";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";
import Breadcrumbspage from "../../../Components/Breadcrumbspage";

const ActiveTicketsWrapper = styled('div')({
    padding:'50px 0px',
    ".no-tickets-found-wrappper":{
            background:'#fdfdfd',
            textAlign:'center',
            padding:'20px',
            borderRadius:'10px',
            boxShadow:'0 0 15px #ccccccbd',
    }
})

function Approved_Tickets() {
  return (
    <>
      <Header />
      <Box pt={15}>
        <Breadcrumbspage title="Approved Tickets" heading="APPROVED TICKETS" />
      </Box>
     <ActiveTicketsWrapper>
     <Container>
        <Box className="no-tickets-found-wrappper">
            <Typography variant="body1">Not Found Any Tickets</Typography>
        </Box>
      </Container>
     </ActiveTicketsWrapper>
      <Footer />
    </>
  );
}
export default Approved_Tickets;
