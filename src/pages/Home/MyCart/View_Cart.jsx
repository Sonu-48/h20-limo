import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  styled,
  Grid,
  Card,
  Button,
  IconButton,
} from "@mui/material";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";
import Breadcrumbspage from "../../../Components/Breadcrumbspage";
import { useNavigate } from "react-router-dom";
import { Close } from "@mui/icons-material";

const ViewCartWrapper = styled("div")({
  padding: "100px 0px 50px",
  ".shpping-cart-outer-wrapper": {
    padding: "20px",
    background: "#f4f4f4",
    boxShadow: "1px 2px 3px 0px rgba(0,0,0,0.10)",
    borderRadius: "10px",
  },
  ".cart-empty": {
    background: "#ffff",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "20px",
  },
  ".price-summery-inner-box": {
    padding: "10px",
    border: "1px solid #f1f1f1",
  },
  ".item-button-wrapper": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  ".item-number-wrapper": {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

function View_Cart() {
  const [itemnumber, setItemnumber] = useState(0);
  const navigate = useNavigate();

  // handleIncrement function
  const handleIncrement = () => {
    setItemnumber((itemnumber) => itemnumber + 1);
  };

  // handleDecrement function
  const handleDecrement = () => {
    if (itemnumber > 0) {
      setItemnumber((itemnumber) => itemnumber - 1);
    }
  };
  return (
    <>
      <Header />
      <Box pt={15}>
        <Breadcrumbspage heading="VIEW CART" title="View Cart" />
      </Box>
      <ViewCartWrapper>
        <Container sx={{ maxWidth: "768px!important" }}>
          <Box className="shpping-cart-outer-wrapper">
            <Typography variant="body1" color="#17233e">
              Shopping Cart
            </Typography>
            <Box mt={3}>
              <Grid contianer spacing={2}>
                <Grid item lg={12}>
                  <Grid
                    container
                    spacing={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                      <Box>
                        <img
                          src="/images/cart-img.jpg"
                          alt="Cart"
                          loading="lazy"
                          width="100%"
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                      <Box align="center">
                        <Typography variant="body1" color="#17233e">
                          Blazer Jacket
                        </Typography>
                        <Typography variant="body1">Mens Fashion</Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                      <Box className="item-button-wrapper">
                        <Button
                          variant="contained"
                          sx={{
                            minWidth: "30px",
                            height: "30px",
                            padding: "10px",
                          }}
                          onClick={handleIncrement}
                        >
                          +
                        </Button>
                        <Box className="item-number-wrapper">
                          <Typography variant="body1">{itemnumber}</Typography>
                        </Box>
                        <Button
                          variant="contained"
                          sx={{
                            minWidth: "30px",
                            height: "30px",
                            padding: "10px",
                          }}
                          onClick={handleDecrement}
                        >
                          -
                        </Button>
                      </Box>
                    </Grid>
                    <Grid item lg={2} md={3} sm={6} xs={12}>
                      <Typography variant="body1">$ 22.5</Typography>
                    </Grid>
                    <Grid item lg={1} md={3} sm={6} xs={12}>
                      <IconButton>
                        <Close />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            {/* <Box className="cart-empty">
              <Typography variant="body1">cart is empty</Typography>
            </Box> */}
          </Box>
        </Container>

        {/* price summary section */}
        <Box mt={8}>
          <Container>
            <Card sx={{ padding: "20px" }}>
              <Typography variant="h4" color="#17233e">
                Your Price Summary
              </Typography>
              <Grid container mt={2}>
                <Grid item lg={9} md={9} sm={6} xs={6}>
                  <Box className="price-summery-inner-box">
                    <Typography variant="body1">Sub Total</Typography>
                  </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  <Box className="price-summery-inner-box">
                    <Typography variant="body1">$ 32.5</Typography>
                  </Box>
                </Grid>
                <Grid item lg={9} md={9} sm={6} xs={6}>
                  <Box className="price-summery-inner-box">
                    <Typography variant="body1">Tax & fee</Typography>
                  </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  <Box className="price-summery-inner-box">
                    <Typography variant="body1">30</Typography>
                  </Box>
                </Grid>
                <Grid item lg={9} md={9} sm={6} xs={6}>
                  <Box className="price-summery-inner-box">
                    <Typography variant="body1">Shipping Fee</Typography>
                  </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  <Box className="price-summery-inner-box">
                    <Typography variant="body1">0.00</Typography>
                  </Box>
                </Grid>
                <Grid item lg={9} md={9} sm={6} xs={6}>
                  <Box
                    className="price-summery-inner-box"
                    sx={{ background: "#17233e" }}
                  >
                    <Typography variant="body1" color="#fff">
                      Amount
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={6}>
                  <Box
                    className="price-summery-inner-box"
                    sx={{ background: "#17233e" }}
                  >
                    <Typography variant="body1" color="#fff">
                      $ 32.5
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Card>
            <Box mt={3}>
              <Button variant="contained" color="primary" onClick={()=>navigate('/order-address')}>
                Proceed To Checkout
              </Button>
            </Box>
          </Container>
        </Box>
      </ViewCartWrapper>
      <Footer />
    </>
  );
}
export default View_Cart;
