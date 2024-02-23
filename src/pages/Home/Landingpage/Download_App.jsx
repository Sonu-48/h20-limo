import React from "react";
import { Container,Box,Typography,styled,Grid} from "@mui/material";
import { FaTicketAlt,FaCompass  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TiDirections } from "react-icons/ti";




const Wrapper = styled('div')({
    padding:'50px 0px',
    background: "url('/images/shape4.png')",
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',

    ".heading-box":{
        textAlign:'center',
        "& span":{
            color:'#029e9d'
        }
    },
    ".card":{
        "& svg":{
            fontSize:'55px'
        }
    }
})


function Download_App(){
    return(
        <Wrapper>
            <Container>
                <Box className="heading-box" >
                    <Typography variant="h5" color="#fdc703" fontWeight={600}>Experience FIRE ISLAND</Typography>
                    <Typography variant="h2" pt={1} pb={1}>DOWNLOAD <span>OUR NEW APP!!</span></Typography>
                    <Typography variant="body1">Chart Your Journey Faster, Easier,and More Enjoyably!</Typography>
                </Box>
                <Grid container spacing={3} mt={3}>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Box className="card" align="center">
                            <Box>
                                <FaTicketAlt/>
                            </Box>
                            <Box>
                                <Typography variant="h5" pt={2} pb={2}>Find Tickets</Typography>
                                <Typography variant="body1">Search and find tickets to your destination</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box className="card" align="center">
                        <Box>
                            <FaLocationDot/>
                        </Box>
                            <Box>
                                <Typography variant="h5" pt={2} pb={2}>Book Tickets</Typography>
                                <Typography variant="body1">Book tickets for a reasonable rate, on your preferred timing</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box className="card" align="center">
                                <Box>
                                    <TiDirections/>
                                </Box>
                            <Box>
                                <Typography variant="h5" pt={2} pb={2}>Travel Comfortably</Typography>
                                <Typography variant="body1">Travel on time to your destination</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Box className="card" align="center">
                        <Box>
                            <FaCompass />
                        </Box>
                            <Box>
                                <Typography variant="h5" pt={2} pb={2}>100% Safe Journey Guaranteed</Typography>
                                <Typography variant="body1">We have all measures to ensure your safe and sound travel</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    );
}
export default Download_App;