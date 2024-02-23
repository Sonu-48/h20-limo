import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  styled,
  Grid,
  Card,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Header from "../HomeLayout/Header";
import Footer from "../HomeLayout/Footer";
import Breadcrumbspage from "./Breadcrumbspage";
import { FaCreditCard } from "react-icons/fa";

const CheckoutAddressWrapper = styled("div")({
  padding: "50px 0px",
  "& p": {
    paddingBottom: "5px",
  },
  ".card-details": {
    display: "flex",
    alignItems: "center",
  },
  ".save-changes-button-box":{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    flexWrap:'wrap',
    gap:'10px',
  }
});

function Checkout_Address() {
  return (
    <>
      <Header />
      <Box pt={15}>
        <Breadcrumbspage heading="ENTER ADDRESS" title="Enter Address" />
      </Box>
      <CheckoutAddressWrapper>
        <Container sx={{ maxWidth: "768px!important" }}>
          <Box align="center">
            <Typography variant="h3" color="#17233e">
              Address Information
            </Typography>
          </Box>
          <Card sx={{ padding: "20px", marginTop: "30px" }}>
            <Grid container spacing={3}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography variant="body1">First Name</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Full Name"
                  name="fullName"
                  fullWidth
                  autoComplete="off"
                  size="small"
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography variant="body1">Phone Number</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  fullWidth
                  autoComplete="off"
                  size="small"
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography variant="body1">Address Line 1</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Address Line 1"
                  name="address1"
                  fullWidth
                  autoComplete="off"
                  size="small"
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography variant="body1">Address Line 2</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Address Line 2"
                  name="address2"
                  fullWidth
                  autoComplete="off"
                  size="small"
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography variant="body1">City</Typography>
                <TextField
                  variant="outlined"
                  placeholder="City"
                  name="city"
                  fullWidth
                  autoComplete="off"
                  size="small"
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography variant="body1">State</Typography>
                <TextField
                  variant="outlined"
                  placeholder="State"
                  name="state"
                  fullWidth
                  autoComplete="off"
                  size="small"
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography variant="body1">Zipcode</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Zipcode"
                  name="zipcode"
                  fullWidth
                  autoComplete="off"
                  size="small"
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography variant="body1">Landmark (optional)</Typography>
                <TextField
                  variant="outlined"
                  placeholder="Landmark"
                  name="landmark"
                  fullWidth
                  autoComplete="off"
                  size="small"
                />
              </Grid>
            </Grid>
            {/* Card Details section */}
            <Box mt={4}>
              <Box className="card-details">
                <FaCreditCard />
                <Typography variant="h4" color="#17233e" pl={2}>
                  Card Details
                </Typography>
              </Box>
              <Grid container spacing={3} mt={1}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Typography variant="body1">Card Number</Typography>
                  <TextField
                    variant="outlined"
                    placeholder="**** **** **** ****"
                    name="cardNumber"
                    fullWidth
                    autoComplete="off"
                    size="small"
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Typography variant="body1">Card Holder Name</Typography>
                  <TextField
                    variant="outlined"
                    placeholder="Card Holder Name"
                    name="cartholderName"
                    fullWidth
                    autoComplete="off"
                    size="small"
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Typography variant="body1">Expiry Date</Typography>
                  <TextField
                    variant="outlined"
                    placeholder="mm/yy"
                    name="expiryDate"
                    fullWidth
                    autoComplete="off"
                    size="small"
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Typography variant="body1">CVC/CVV</Typography>
                  <TextField
                    variant="outlined"
                    placeholder="***"
                    name="cvvNumber"
                    fullWidth
                    autoComplete="off"
                    size="small"
                  />
                </Grid>
              </Grid>
            </Box>
            <Box mt={3} className="save-changes-button-box">
              <FormControlLabel
                control={<Checkbox />}
                label="Save Shipping Address"
              />
              <Button variant="contained" type="submit">Save Changes</Button>
            </Box>
          </Card>
        </Container>
      </CheckoutAddressWrapper>
      <Footer />
    </>
  );
}
export default Checkout_Address;
