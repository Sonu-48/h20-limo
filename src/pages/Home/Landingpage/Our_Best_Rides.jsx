import React from "react";
import { Container, Box, Typography, styled } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BestRidesWrapper = styled("div")({
  padding: "50px 0px",
  "& span": {
    color: "#029e9d",
  },
  "& img": {
    width: "100%",
    height: "100%",
    borderRadius: "10px 10px 0px 0px",
  },
  ".slider-img-wrapper": {
    width: "410px!important",
    boxShadow: "0 0 15px #cccccc",
    background: "#fff",
    position: "relative",
    borderRadius: "10px 10px 0px 0px",
    "&::before": {
      position: "absolute",
      content: "''",
      bottom: "0px",
      left: "0px",
      width: "0%",
      height: "4px",
      background: "#029e9d!important",
      transition: "all ease-in-out 0.5s",
      borderRadius: "10px",
    },
    "&:hover::before": {
      width: "100%",
    },
  },
  ".slider-footer-content": {
    padding: "20px",
    "& h3": {
      color: "#029e9d",
    },
    "& p": {
      color: "#029e9d",
    },
  },
  ".our-rider-price-box": {
    color: "#777!important",
    "& span": {
      fontWeight: "600!important",
    },
  },
});

function Our_Best_Rides() {
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
  };
  return (
    <BestRidesWrapper>
      <Container>
        <Box>
          <Typography variant="h5" color="#fdc703" fontWeight={600}>
            Top Pick
          </Typography>
          <Typography variant="h2" pt={1}>
            Our <span>Best Rides</span>
          </Typography>
          <Typography variant="body1" pt={1}>
            Checkout our best and popular rides below. Search for more!
          </Typography>
        </Box>
        <Box mt={5}>
          <Slider {...settings}>
            <Box className="slider-img-wrapper">
              <Box className="slider-img-box">
                <img src="/images/miami.png" alt="Miami" loading="lazy" />
              </Box>
              <Box className="slider-footer-content">
                <Typography variant="body1">Island</Typography>
                <Typography variant="h3" pt={1} pb={1}>
                  Fire Island
                </Typography>
                <Box>
                  <Typography variant="body1" className="our-rider-price-box">
                    <span> $26.00</span> | Per Person
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="slider-img-wrapper">
              <Box className="slider-img-box">
                <img src="/images/Houston.png" alt="Houston" loading="lazy" />
              </Box>
              <Box className="slider-footer-content">
                <Typography variant="body1">Island</Typography>
                <Typography variant="h3" pt={1} pb={1}>
                  Island
                </Typography>
                <Box>
                  <Typography variant="body1" className="our-rider-price-box">
                    <span> $20.00</span> | Per Person
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="slider-img-wrapper">
              <Box className="slider-img-box">
                <img src="/images/Seattle.png" alt="Seattle" loading="lazy" />
              </Box>
              <Box className="slider-footer-content">
                <Typography variant="body1">Island</Typography>
                <Typography variant="h3" pt={1} pb={1}>
                  Port of New York
                </Typography>
                <Box>
                  <Typography variant="body1" className="our-rider-price-box">
                    <span> $17.00</span> | Per Person
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="slider-img-wrapper">
              <Box className="slider-img-box">
                <img src="/images/Houston.png" alt="Houston" loading="lazy" />
              </Box>
              <Box className="slider-footer-content">
                <Typography variant="body1">Island</Typography>
                <Typography variant="h3" pt={1} pb={1}>
                  Fire Island
                </Typography>
                <Box>
                  <Typography variant="body1" className="our-rider-price-box">
                    <span> $26.00</span> | Per Person
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Slider>
        </Box>
      </Container>
    </BestRidesWrapper>
  );
}
export default Our_Best_Rides;
