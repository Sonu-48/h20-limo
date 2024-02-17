import React, { useState } from "react";
import {
  Container,
  Box,
  styled,
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  Typography,
  IconButton,
  Drawer,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { headerData } from "./HeaderData";
import LoginPopup from "../Components/LoginPopup";
import { FaRegUser } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const HeaderWrapper = styled("div")({
  ".logo": {
    width: "175px",
  },

  ".navlink": {
    paddingLeft: "25px",

    "& a": {
      paddingRight: "20px",
      position: "relative",
      "&:hover .dropdown-link": {
        display: "block",
        transition: "0.7s",
      },
    },
    "& a.active": {
      color: "#029e9d",
    },
  },

  ".book-now": {
    "& a:hover .dropdown-link": {
      display: "block",
    },
  },
  "@media screen and (max-width:600px)": {
    ".logo": {
      width: "100px!important",
    },
  },
});

const MobileDrawer = styled("div")({
  "& a": {
    color: "#fff!important",
  },
});

function Header() {
  const [loginmodal, setLoginmodal] = useState(false);
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const [myTickets, setMyTickets] = useState(false);
  return (
    <HeaderWrapper>
      <AppBar sx={{ padding: "15px", boxShadow: "none" }}>
        <Container>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              paddingLeft: "0px!important",
              paddingRight: "0px!important",
            }}
          >
            <Link to="">
              <img
                src="/images/h20-logo.jpg"
                alt="h20 LIMO"
                loading="lazy"
                className="logo"
              />
            </Link>
            {/* Mobile Menu Button  */}
            <Box
              sx={{
                display: { lg: "none", md: "none", sm: "block", xs: "block" },
              }}
            >
              {mobileDrawer ? (
                <>
                  <IconButton onClick={() => setMobileDrawer(false)}>
                    <MdClose />
                  </IconButton>
                </>
              ) : (
                <>
                  <IconButton onClick={() => setMobileDrawer(true)}>
                    <HiMenu />
                  </IconButton>
                </>
              )}
            </Box>
            {/* mobile menu end */}
            <Box
              className="navlink"
              sx={{
                display: { lg: "block", md: "block", sm: "none", xs: "none" },
              }}
            >
              {headerData.map((headerdata) => {
                return (
                  <NavLink to={headerdata.url} id={headerdata.id}>
                    {headerdata.label}
                    {headerdata.subItems && (
                      <Box className="dropdown-link">
                        <List>
                          {headerdata.subItems.map((data) => (
                            <ListItem
                              key={data.id}
                              sx={{ borderBottom: "1px dashed #f1f1f1" }}
                            >
                              <Link to={data.url} id={data.id}>
                                {data.label}
                              </Link>
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    )}
                  </NavLink>
                );
              })}
            </Box>
            {/* Login and Book Now Button */}
            <Box
              className="book-now"
              sx={{
                display: { lg: "block", md: "block", sm: "none", xs: "none" },
              }}
            >
              <Link
                to=""
                component={Button}
                onClick={() => setLoginmodal(true)}
              >
                <FaRegUser />
                LOGIN&nbsp;/ &nbsp;REGISTER
              </Link>
              <Box className="dropdown-link">
                <List>
                  <ListItem>
                    <Link to="">My Profile</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="">Change Password</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="">Logout</Link>
                  </ListItem>
                </List>
              </Box>

              <Button
                variant="contained"
                color="primary"
                sx={{ marginLeft: "15px" }}
              >
                Book Now
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Mobile Drawer section */}
      <Drawer
        sx={{
          width: "100%",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "100%",
            boxSizing: "border-box",
            top: "90px",
            background: "#1F1D26",
            color: "#fff",
          },
        }}
        variant="temporary"
        anchor="top"
        open={mobileDrawer}
        onClose={() => setMobileDrawer(false)}
      >
        <MobileDrawer>
          <List>
            {headerData &&
              headerData.map((data) => {
                return (
                  <ListItem sx={{ borderBottom: "1px solid #f1f1f1" }}>
                    <Link
                      to={data.url}
                      id={data.id}
                      style={{ padding: "10px 20px" }}
                      onClick={() => setMyTickets(!myTickets)}
                    >
                      {data.label}
                      {data.subItems && (
                        <Box
                          className="dropdown-link"
                          sx={{
                            display: myTickets ? "block" : "none",
                            background: "transparent",
                            position: "relative",
                            zIndex: "99",
                          }}
                        >
                          <List>
                            {data.subItems.map((data) => (
                              <ListItem
                                key={data.id}
                                sx={{ borderBottom: "1px solid #f1f1f1" }}
                              >
                                <Link
                                  to={data.url}
                                  id={data.id}
                                  style={{ padding: "10px 20px" }}
                                >
                                  {data.label}
                                </Link>
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                      )}
                    </Link>
                  </ListItem>
                );
              })}

            <Box pt={1} pb={1} sx={{ margin: "0px 15px" }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ padding: "10px", boxShadow: "none" }}
                fullWidth
              >
                Book Now
              </Button>
            </Box>
          </List>
        </MobileDrawer>
      </Drawer>
      <LoginPopup loginmodal={loginmodal} setLoginmodal={setLoginmodal} />
    </HeaderWrapper>
  );
}
export default Header;
