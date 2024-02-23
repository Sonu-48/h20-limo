import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  styled,
  List,
  ListItem,
  ListItemButton,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import Breadcrumbspage from "../../../Components/Breadcrumbspage";
import Header from "../../../HomeLayout/Header";
import Footer from "../../../HomeLayout/Footer";

const ChartsSection = styled("div")({
  display: "flex",
  height: "100%",
  ".left-chart-list-box": {
    width: "250px",
    background: "lightgreen",
    color: "#fff",
    overflow: "auto",
  },
  ".right-chart-section": {
    flex: "1",
    background: "skyblue",
    position: "relative",
    boxSizing: "border-box",
  },
  ".header-chart-section": {
    background: "grey",
    padding: "15px",
    position: "absolute",
    top: "10px",
    left: "0px",
    right: "0px",
    width: "100%",
    boxSizing: "border-box",
  },
  ".content-chart-section": {
    height: "100%",
    overflow: "auto",
    padding: "100px 15px 50px",
  },
  ".chart-button-section": {
    position: "absolute",
    bottom: "10px",
    left: "0px",
    right: "0px",
    width: "100%",
    padding: "0px 15px",
    boxSizing: "border-box",
  },
});

const userlist = [
  { id: "1", name: "sonu", msg: " sonu" },
  { id: "2", name: "manveet", msg: " manveet" },
  { id: "3", name: "manish", msg: " manish" },
  { id: "4", name: "prince", msg: " prince" },
  { id: "5", name: "govind", msg: " govind" },
  { id: "6", name: "sameer", msg: " sameer" },
  { id: "7", name: "abhishek", msg: "abhishek" },
  { id: "8", name: "chandan", msg: "chandan" },
  { id: "9", name: "sumit", msg: " sumit" },
  { id: "10", name: "manpreet", msg: "manpreet" },
];

function List_All_Charts() {
  const [usermsg, setUsermsg] = useState("");
  const [msg, setMsg] = useState("");
  const [sendmsg,setSendmsg] = useState([])

  // handleMsgSend function section
  const handleMsgSend = () => {
    setSendmsg((sendmsg)=>[...sendmsg, msg]);
    setMsg(""); 
  };
  return (
    <>
      <Header />
      <Box pt={15}>
        <Breadcrumbspage title="Message" heading="Message" />
      </Box>
      <Container>
        <ChartsSection>
          <Box className="left-chart-list-box">
            <List>
              {userlist &&
                userlist.map((userlist) => (
                  <ListItem id={userlist.id}>
                    <ListItemButton onClick={() => setUsermsg(userlist.msg)}>
                      {userlist.name}
                    </ListItemButton>
                  </ListItem>
                ))}
            </List>
          </Box>
          <Box className="right-chart-section">
            <Box className="header-chart-section">
              <Typography variant="h3">{usermsg}</Typography>
            </Box>
            <Box className="content-chart-section">
              {usermsg ? (
                <>
                  <Box key={usermsg.id}>
                    <Typography variant="h3">{`Hi ${usermsg}`}</Typography>
                    {sendmsg && sendmsg.map((data)=>(
                    <Typography variant="body1">{data}</Typography>
                  ))}
                  </Box>
                 
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6">No Message</Typography>
                  </Box>
                </>
              )}
            </Box>
            <Box className="chart-button-section">
              <Grid container spacing={2}>
                <Grid item lg={9} md={9} sm={9} xs={12}>
                  <TextField
                    variant="outlined"
                    placeholder="Write something..."
                    fullWidth
                    size="medium"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    autoComplete="off"
                  />
                </Grid>
                <Grid item lg={3} md={3} sm={3} xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    fullWidth
                    disabled={msg.length === 0}
                    onClick={handleMsgSend}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </ChartsSection>
      </Container>
      <Footer />
    </>
  );
}

export default List_All_Charts;
