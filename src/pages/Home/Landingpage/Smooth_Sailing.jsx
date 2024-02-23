import React from "react";
import { Container, Box, Typography, styled, Link, IconButton } from "@mui/material";
import { FaRegCirclePlay } from "react-icons/fa6";


const Wrapper = styled('div')({
    backgroundImage:"url('/images//radius-img.jpg')",
    backgroundSize:'cover',
    padding:'20px 0px',
    height:'100vh',
    position:'relative',
    zIndex:'1',
    display:'flex',
    alignItems:'center',
    "&::before":{
        position:'absolute',
        content:"''",
        top:'0px',
        left:'0px',
        width:'100%',
        height:'100vh',
        padding:'20px 0px',
        background:'#fdfdfd',
        opacity:'0.5',
        zIndex:'-1'
    },
    ".smooth-sailing-outer":{
        textAlign:'center',
        "& h2":{
            color:'#17233e',
            padding:'15px 0px',
        },
        "& span":{
            color:'#fdc703 !important',
        }
    },
    ".google-store-outer-wrapper":{
        textAlign:'center',
        paddingTop:'100px',
       "& img":{
        maxWidth:'200px',
       }
    }
})

function Smooth_Sailing() {
  return (
    <Wrapper>
      <Container sx={{maxWidth:'850px!important'}}>
        <Box className="smooth-sailing-outer">
            <Typography variant="body1" sx={{  color:'#029e9d ',
            fontWeight:'600',}}>Embrace Your Commute!</Typography>
            <Typography variant="h2">Smooth Sailing Ahead <span>Get Your Boat Ticket Here</span></Typography>
            <Typography variant="body1">Navigate your journeys effortlessly: Your Ocean of options awaits at SeaCab. Have a comfortable, safe and sound travel with us everyday</Typography>
        </Box>
        <Box align="center" mt={5}>
            <IconButton>
                <FaRegCirclePlay style={{fontSize:'50px'}}/>
            </IconButton>
        </Box>
        <Box className="google-store-outer-wrapper">
            <Link href="https://play.google.com/store/games?device=windows" target="_blank">
                <img src="/images/google-play-store.png" alt="Google Play Store" loading="lazy" />
            </Link>
            <Link href="https://www.apple.com/in/app-store/" ml={4} target="_blank">
                <img src="/images/apple-app-store.png" alt="Apple App Store" loading="lazy" />
            </Link>
        </Box>
      </Container>
    </Wrapper>
  );
}
export default Smooth_Sailing;
