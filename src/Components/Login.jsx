import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  styled,
  Grid,
  Button,
  Divider,
  Typography,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import Forgotpassword from "./Forgotpassword";
import { toast } from "react-toastify";
import axios from "axios";

const LoginWrapper = styled("div")({
  ".forgot-password": {
    color: "#4878bf",
    fontWeight: 600,
    fontSize: "16px",
    "&:hover": {
      background: "#fff!important",
      color: "#4878bf!important",
    },
  },
  "& input": {
    "&::placeholder": {
      color: "#000",
      opacity: "1",
    },
  },
});

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required."),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required("Password is required."),
});

function Login({ setLoginmodal }) {
  const [showpassword, setShowpassword] = useState(false);
  const [showforgotmodal, setShowforgotmodal] = useState(false);


  // const navigate=useNavigate();
  const handleTogglePassword = () => {
    setShowpassword((prevShowPassword) => !prevShowPassword);
  };
 

const handleSubmit = async(values)=>{
  try{
      const res = await axios.post("https://quickstart-1603869425824-default-rtdb.firebaseio.com/userdata.json",{
        body:{
          email: values.email,
          password: values.password,
        }
      })
      if(res.status === 200){
        toast.success("login Successfully");
          // localStorage.setItem(res.data.token)
      }
      else{
        toast.error(error);
      }
  }
  catch(error){
    console.log(error);
  }
}


  // handleForgot modal function
  const handleForgot = () => {
    setShowforgotmodal(true);
  }

  
  return (
    <LoginWrapper>
      <Container>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid
                  item
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box>
                    <img
                      src="/images/screenbg.png"
                      alt="Login"
                      loading="lazy"
                      style={{width:'100%',borderRadius:'10px'}}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box>
                    <TextField
                      variant="outlined"
                      placeholder="Email"
                      fullWidth
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.email && errors.email)}
                    />
                    <FormHelperText error>
                      {touched.email && errors.email}
                    </FormHelperText>
                  </Box>

                  <Box mt={1}>
                    <TextField
                      variant="outlined"
                      placeholder="Password"
                      fullWidth
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.password && errors.password)}
                      type={showpassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleTogglePassword}
                              edge="end"
                              sx={{
                                background: "transparent!important",
                                color: "#000!important",
                              }}
                            >
                              {showpassword ? (
                                <MdOutlineVisibility />
                              ) : (
                                <MdOutlineVisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <FormHelperText error>
                      {touched.password && errors.password}
                    </FormHelperText>
                  </Box>

                  {/* Forgot password section */}
                  <Box align="end" pt={2} pb={2}>
                    <IconButton
                      className="forgot-password"
                      sx={{ background: "transparent!important" }}
                      onClick={handleForgot}
                    >
                      Lost Your Password
                    </IconButton>
                  </Box>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="small"
                      type="submit"
                    >
                      Sign In
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
      {/* Forgot modal component */}
      <Forgotpassword
        showforgotmodal={showforgotmodal}
        setShowforgotmodal={setShowforgotmodal}
      />
    </LoginWrapper>
  );
}
export default Login;
