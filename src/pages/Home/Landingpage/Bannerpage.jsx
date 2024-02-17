import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  Typography,
  styled,
  FormControl,
  FormHelperText
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { toast } from "react-toastify";

const BannerSection = styled("div")({
  background: "url('/images/testimonial.png')",
  backgroundSize: "cover",
  paddingTop: "200px",
  ".banner-img": {
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
});

function Bannerpage() {

  const [datevalue, setDatevalue] = React.useState(dayjs());
  const [location,setLocation] = useState({pickup:'',destination:''})
  const [errormsg,setErrormsg] = useState(false);
  
  const handleLocation = (e)=>{
    setLocation({...location,[e.target.name]:e.target.value})
  }

  // handleSubmit function 
   const handleSubmit = ()=>{
        if(location.pickup.length!== 0 && location.destination.length!== 0){
          toast.success("Confirm")
          setErrormsg(false);
          setLocation({pickup:'',destination:''})
        }
        else{
          setErrormsg("this field is required");
          toast.error("All fields are required")
        }
   }
  
  return (
    <BannerSection>
      <Container>
        <Grid container spacing={3}>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                textAlign: {
                  lg: "left",
                  md: "left",
                  sm: "center",
                  xs: "center",
                },
              }}
            >
              <Typography variant="h5" color="#029e9d" fontWeight="600">
                Download Our New APP!
              </Typography>
              <Typography variant="h1" color="#17233e">
                Have It Your Way, On The Bay!!
              </Typography>

              <Box mt={3}>
                <Grid container spacing={2}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Select variant="outlined" fullWidth defaultValue="Pickup" name="pickup" value={location.pickup} onChange={handleLocation}>
                      <MenuItem value="Pickup">Pickup</MenuItem>
                    </Select>
                    <FormHelperText error>{errormsg}</FormHelperText>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Select variant="outlined" fullWidth defaultValue="Destination" name="destination" value={location.destination} onChange={handleLocation}>
                      <MenuItem value="Destination">Destination</MenuItem>
                    </Select>
                    <FormHelperText error>{errormsg}</FormHelperText>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                  <FormControl
                    fullWidth
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={datevalue}
                        onChange={(date) => setDatevalue(date)}
                        format="DD-MM-YYYY"
                        disablePast={true}
                      />
                    </LocalizationProvider>
                  </FormControl>
                  </Grid>
                </Grid>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    startIcon={<FaSearch />}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box className="banner-img">
              <img src="/images/banner-img.jpg" alt="Banner" loading="lazy" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </BannerSection>
  );
}
export default Bannerpage;
