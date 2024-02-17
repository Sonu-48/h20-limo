import React from "react";
import { Container,Box,Typography,styled } from "@mui/material";

const Wrapper = styled('div')({
    padding:'50px 0px',
    ".heading-box":{
        textAlign:'center',
        "& span":{
            color:'#029e9d'
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
            </Container>
        </Wrapper>
    );
}
export default Download_App;