import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Bannerpage from "../pages/Home/Landingpage/Bannerpage";
import Download_App from "../pages/Home/Landingpage/Download_App";
import Use_Our_App from "../pages/Home/Landingpage/Use_Our_App";
import Our_Best_Rides from "../pages/Home/Landingpage/Our_Best_Rides";
import Smooth_Sailing from "../pages/Home/Landingpage/Smooth_Sailing";

const HomeLayout=()=>{
    return(
            <Box>
                <Header/>
                <Bannerpage/>
                    <Download_App/>
                    <Use_Our_App/>
                    <Our_Best_Rides/>
                    <Smooth_Sailing/>
                <Footer/>
            </Box>
    );   
}
export default HomeLayout