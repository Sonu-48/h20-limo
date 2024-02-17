import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Dialog, Grid, IconButton, styled } from "@mui/material";
import Login from "./Login";
import { IoMdClose } from "react-icons/io";
import Signup from "./Signup";

const Wrapper = styled("div")({});

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

function LoginPopup({ loginmodal, setLoginmodal }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <Container>
        <Dialog open={loginmodal}>
          <Box align="end">
            <IconButton
              onClick={() => setLoginmodal(false)}
              sx={{
                background: "transparent!important",
                color: "#000!important",
              }}
            >
              <IoMdClose />
            </IconButton>
          </Box>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              style={{ justifyContent: "space-between!important" }}
            >
              <Tab label="Login" {...a11yProps(0)} sx={{ width: "100%" }} />
              <Tab label="Register" {...a11yProps(1)} sx={{ width: "100%" }} />
            </Tabs>

            <CustomTabPanel value={value} index={0}>
              <Login setLoginmodal={setLoginmodal} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Signup setLoginmodal={setLoginmodal} />
            </CustomTabPanel>
          </Box>
        </Dialog>
      </Container>
    </Wrapper>
  );
}
export default LoginPopup;
