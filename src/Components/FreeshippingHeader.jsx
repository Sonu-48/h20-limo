import React from "react";
import { Container,Box,styled,Typography } from "@mui/material"; 
import { FaTruck } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import { FaRegCopyright } from "react-icons/fa6";
import { TbTableOptions } from "react-icons/tb";






const Wrapper= styled('div')({
    background:"#133d6a",
    padding:'5px 0px',
    ".shipping-icon-box":{
        color:'#fff',
        display:'flex',
        alignItems:'center',
        gap:'10px',
        padding:'10px 0px',
        "& p":{
            fontSize:'13px',
        }
    },
    ".shipping-outer-box":{
        maxWidth:'1280px',
        display:'flex',
        alignItems:'cener',
        justifyContent:'space-between',
        margin:'0 auto',
    }
})

function FreeshippingHeader(){
    return(
        <Wrapper>
            <Container>
                <Box className="shipping-outer-box">
                    <Box className="shipping-icon-box">
                        <FaTruck/>
                        <Typography variant="body1">Free UK shipping on Selected Items</Typography>
                    </Box>
                    <Box className="shipping-icon-box">
                        <MdRefresh/>
                        <Typography variant="body1">Simple Returns Process</Typography>
                    </Box>
                    <Box className="shipping-icon-box">
                        <IoPricetagOutline/>
                        <Typography variant="body1">Price Match</Typography>
                    </Box>
                    <Box className="shipping-icon-box">
                        <LuBadgeCheck/>
                        <Typography variant="body1">Trust us 45yrs+ industry experience</Typography>
                    </Box>
                    <Box className="shipping-icon-box">
                        <FaRegCopyright/>
                        <Typography variant="body1">Big Brands</Typography>
                    </Box>
                    <Box className="shipping-icon-box">
                        <TbTableOptions/>
                        <Typography variant="body1">Finance Options</Typography>
                    </Box>
                </Box>
            </Container>
        </Wrapper>
    );
}
export default FreeshippingHeader;