import React from "react";
import { Container,Box,styled, Grid, Typography,Link, IconButton } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";
import { MdFacebook } from "react-icons/md";
import { FaTwitter,FaInstagram,FaLinkedin,FaLongArrowAltUp  } from "react-icons/fa";



const FooterSection = styled('div')({
  backgroundImage:"url('/images/background_pattern.png')",
  backgroundPosition:'right',
  backgroundRepeat:'no-repeat',
  backgroundColor:'#17233e',
  height:'70vh',
  position:'relative',
  "@media screen and (max-width:600px)":{
        height:'100vh',
        ".section-shape":{
          display:'none',
        }
  },
  ".section-shape":{
    backgroundImage:"url('/images/shape.png')",
    position:'absolute',
    left:'0px',
    top:'0px',
    width:'100%',
    height:'96px',
    backgroundSize:'contain',
    zIndex:'1'
  },
  "& img":{
    width:'180px',
  },
  ".footer-content-section":{
    position:'relative',
    top:'200px',
    "& a":{
      display:'block',
      paddingBottom:'20px',
      color:'#fff',
      fontSize:'16px',
      textDecoration:'none'
    }
  },
  ".copy-right-section":{
    backgroundColor:'#fbfbfb12',
    borderRadius:'10px',
    padding:'15px 20px',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    flexWrap:'wrap',
    marginTop:'40px',
    "& p":{
      color:'#fff',
      fontWeight:'400',
    }
  },
  ".social-link":{
    display:'flex',
    alignItems:'center',
    gap:'15px',
    "& a":{
      width:'40px',
      height:'40px',
      borderRadius:'50%',
      backgroundColor:'#ffffff26',
      fontSize:'17px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
     paddingBottom:'0px',
     "&:hover":{
      backgroundColor:'#029e9d',
      transition:'0.5s'
     }
    }
  },

})

function Footer(){
  const handleArrow = ()=>{
    window.scrollTo(
      { top: 0, behavior: 'smooth' });
  }
  return(
    <FooterSection>
      <Box className="section-shape"></Box>
      <Container>
        <Box className="footer-content-section">
          <Grid container>
            <Grid item lg={4} md={2} sm={6} xs={12}>
                <Box>
                  <img src="/images/h20-logo.jpg" alt="H20" loading="lazy" />
                </Box>
                <Typography variant="h6" pt={2}>Connect With US!!</Typography>
            </Grid>
            <Grid item lg={8} md={10} sm={6} xs={12}>
              <Typography variant="h3" color="#fff">Quick Link</Typography>
              <Box pt={3}>
                <Link component={ReactRouterLink} to="/">Home</Link>
                <Link component={ReactRouterLink} to="/">About Us</Link>
                <Link component={ReactRouterLink} to="/">Book Tickets</Link>
              </Box>
            </Grid>
          </Grid>
           {/* copyright and social section */}
        <Box className="copy-right-section">
          <Typography variant="body1">2024 SeaCab. All rights reserved.</Typography>
          <Box className="social-link">
            
              <Link href="https://www.facebook.com/h2oLimoLI" target="_blank">
                <MdFacebook/>
              </Link>
         
              <Link href="https://www.instagram.com/h2olimo/?igsh=MzRlODBiNWFlZA%3D%3D" target="_blank">
                <FaTwitter/>
              </Link>
            
              <Link href="https://www.instagram.com/h2olimo/?igsh=MzRlODBiNWFlZA%3D%3D" target="_blank">
                <FaInstagram />
              </Link>
           
         
              <Link href="https://www.instagram.com/h2olimo/?igsh=MzRlODBiNWFlZA%3D%3D" target="_blank">
                <FaLinkedin />
              </Link>
            
          </Box>
        </Box>
        </Box>
       
      </Container>
      {/* bottom to top button */}
     <Box sx={{position:'absolute',bottom:'0px',right:'20px'}}>
     <IconButton onClick={handleArrow} sx={{background:'#029e9d'}}>
        <FaLongArrowAltUp/>
      </IconButton>
     </Box>
    </FooterSection>
  );
}
export default Footer;