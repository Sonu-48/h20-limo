import React from "react";
import { Container, Box, Typography, styled, Grid } from "@mui/material";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";
import Breadcrumbspage from "../../../Components/Breadcrumbspage";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Cancelled_Tickets from "../../../Components/Cancelled_Tickets";
import Completed_Tickets from "../../../Components/Completed_Tickets";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Ticket_History() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />
      <Box pt={15}>
        <Breadcrumbspage title="Ticket History" heading="TICKET HISTORY" />
      </Box>
      <Box mt={5}>
      <Container>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Completed Tickets"
              {...a11yProps(0)}
              sx={{ width: "33%" }}
            />
            <Tab
              label="Cancelled Tickets"
              {...a11yProps(1)}
              sx={{ width: "33%" }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
         <Completed_Tickets/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Cancelled_Tickets />
        </CustomTabPanel>
      </Container>
      </Box>
      <Footer />
    </>
  );
}
export default Ticket_History;
