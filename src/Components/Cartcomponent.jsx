import {
  Drawer,
  Box,
  IconButton,
  Typography,
  styled,
  Button,
} from "@mui/material";
import React from "react";
import { IoMdClose } from "react-icons/io";

const DrawerWrapper = styled("div")({
  ".header-section": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ".cart-box":{
    height:'70vh',
    // overflowY:'scroll',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  }
});
const CartFooter = styled("div")({
  position: "absolute",
  bottom: "50px",
  left: "0px",
  right: "0px",
  zIndex:'10',
  padding: "20px",
  background: "#f7f7f7",
  ".basket-total": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "30px",
    "& p":{
      color:'#212529',
      fontWeight:'600',
      fontSize:'16px',
    }
  },
});

function Cartcomponent({ cartopen, setCartopen }) {
  const drawerWidth = 420;
  return (
    <Drawer
      variant="temporary"
      anchor="right"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        height: "100vh",

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          padding: "20px",
          height: "100vh",
        },
      }}
      open={cartopen}
      onClose={() => setCartopen(setCartopen)}
    >
      <DrawerWrapper>
        <Box className="header-section">
          <Typography variant="body2">0 items</Typography>
          <IconButton onClick={() => setCartopen(false)}>
            <IoMdClose />
          </IconButton>
        </Box>
        {/* Product Section */}
        <Box className="cart-box">
          <Box>
            <Typography variant="body2">
              You have no items in your shopping basket.
            </Typography>
          </Box>
        </Box>
        {/* cart Footer button section */}
        <CartFooter>
          <Box className="basket-total">
            <Typography variant="body1">Basket Subtotal</Typography>
            <Typography variant="body1">£ 0</Typography>
          </Box>

          <Button variant="contained" color="primary" fullWidth>
            Checkout
          </Button>
        </CartFooter>
      </DrawerWrapper>
    </Drawer>
  );
}
export default Cartcomponent;
