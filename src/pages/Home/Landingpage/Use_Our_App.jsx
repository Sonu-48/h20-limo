import React from "react";
import { Container, Box, Typography, styled, Grid } from "@mui/material";

const Wrapper = styled("div")({
  backgroundImage: "url('/images/bg-trans.png')",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  position:'relative',
  padding: "60px 0px",
  zIndex:'1',
  "&::before":{
        position:'absolute',
        content:"''",
        width:'100%',
        height:'100%',
        top:'0px',
        left:'0px',
        zIndex:'-1',
        background:'#fdfdfd',
        opacity:'0.5',
  },
 
  ".show-experience-wrapper": {
    width: "75%",
    margin: "0 auto",
    background: "#fff",
    borderRadius: "10px",
    padding: "40px",
    boxShadow: "2 0 15px #cccccc37",
    marginTop: "-80px",
    position: "relative",
    zIndex: "10",
    "& h2": {
      color: "#029e9d",
      paddingBottom: "15px",
    },
  },
});

function Use_Our_App() {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={4}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box className="boat-image">
              <img src="/images/radius-img.jpg" alt="Boat" loading="lazy" />
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box>
              <Typography variant="h2">
                Use Our APP And Chart Your Course With Us
              </Typography>
              <Typography variant="body1" pt={3}>
                Welcome Aboard! - Download our APP on your iPhone or Android and
                begin your journey to FIRE ISLAND. Our APP allows you the
                ability to request a Cross Bay or Fire Island ride with ease.
                Simply enter where, and what time, you'd like to be picked up,
                and your destination. Our Manager will either approve your
                request and you'll be notified your tickets are available, or
                our manager will send you a message of what times are available.
                On other rides, such as the Pines to Cherry Grove, your tickets
                are automatically approved because of the constant travel
                between those communities. You can purchase tickets that are One
                Way or Round Trip. You can purchase tickets for your group of
                people. When you board the boat a deckhand will scan your ticket
                and your good to go!
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box className="show-experience-wrapper">
          <Grid container spacing={3}>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Box>
                <Typography variant="h2">2</Typography>
                <Typography variant="body1">Years Experiences</Typography>
              </Box>
            </Grid>

            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Box>
                <Typography variant="h2">6</Typography>
                <Typography variant="body1">Destinations</Typography>
              </Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Box>
                <Typography variant="h2">54</Typography>
                <Typography variant="body1">Trips</Typography>
              </Box>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Box>
                <Typography variant="h2">299999</Typography>
                <Typography variant="body1">Happy Customers</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Wrapper>
  );
}
export default Use_Our_App;
