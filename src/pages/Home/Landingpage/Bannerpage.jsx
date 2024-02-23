import React, { useEffect, useState } from "react";
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
  FormHelperText,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import axios from "axios";

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
  const [location, setLocation] = useState({ pickup: "", destination: "" });
  const [errormsg, setErrormsg] = useState(false);
  const [userdata,setUserdata] = useState({})

  const usergetdataApi = async()=>{
    const user_id= "user123";
    try{
        const res= await axios.get(`https://quickstart-1603869425824-default-rtdb.firebaseio.com/${user_id}userdata.json`);
        if(res.status === 200){
          setUserdata(res.data);
        }
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    usergetdataApi();
  },[])

  // get value of pickup and destination
  const handleLocation = (e) => {
    setLocation({ ...location, [e.target.name]: e.target.value });
  };

  // handleSubmit function
  const handleSubmit = () => {
    if (location.pickup.length !== 0 && location.destination.length !== 0) {
      if(location.pickup!==location.destination){
        toast.success("Confirm");
        setErrormsg(false);
        setLocation({ pickup: "", destination: "" });
      }
      else{
        toast.error("Both fields can't be same")
      }
     
    } 
    else {
      setErrormsg("this field is required");
      toast.error("All fields are required");
    }
  };

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
                    <Select
                      variant="outlined"
                      fullWidth
                      defaultValue="Pickup"
                      name="pickup"
                      // value={location.pickup}
                      onChange={handleLocation}
                    >
                      <MenuItem value="Pickup">Pickup</MenuItem>
                      <MenuItem value="Bellport">Bellport</MenuItem>
                      <MenuItem value="Patchogue">Patchogue</MenuItem>
                      <MenuItem value="Blue Point">Blue Point</MenuItem>
                      <MenuItem value="West Sayville">West Sayville</MenuItem>
                    </Select>
                    <FormHelperText error>{errormsg}</FormHelperText>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Select
                      variant="outlined"
                      fullWidth
                      defaultValue="Destination"
                      name="destination"
                      // value={location.destination}
                      onChange={handleLocation}
                    >
                      <MenuItem value="Destination">Destination</MenuItem>
                      <MenuItem value="Bellport">Bellport</MenuItem>
                      <MenuItem value="Patchogue">Patchogue</MenuItem>
                      <MenuItem value="Blue Point">Blue Point</MenuItem>
                      <MenuItem value="West Sayville">West Sayville</MenuItem>
                    </Select>
                    <FormHelperText error>{errormsg}</FormHelperText>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <FormControl fullWidth>
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
