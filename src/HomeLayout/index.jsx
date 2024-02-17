import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Bannerpage from "../pages/Home/Landingpage/Bannerpage";
import Download_App from "../pages/Home/Landingpage/Download_App";

const HomeLayout=()=>{
    return(
            <Box>
                <Header/>
                <Bannerpage/>
                    <Download_App/>
                <Footer/>
            </Box>
    );   
}
export default HomeLayout