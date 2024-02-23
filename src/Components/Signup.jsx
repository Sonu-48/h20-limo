import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  styled,
  Grid,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adduser } from "../redux/UserAuthSlice";
// import moment from "moment/moment";

const Signupwrapper = styled("div")({
  "& sup": {
    color: "red",
    fontSize: "15px",
  },
  "& a": {
    color: "#4878bf",
    fontWeight: 600,
    fontSize: "16px",
  },
  "& input": {
    "&::placeholder": {
      color: "#000",
      opacity: "1",
    },
  },
  "& p": {
    paddingBottom: "5px",
    fontWeight: 500,
    fontSize: "16px",
  },
  ".login-with-social": {
    background: "#dbdbdb",
    textAlign: "center",
    padding: "10px 55px",
    borderRadius: "4px",
    maxWidth: "200px",
    margin: "20px auto",
    "& p": {
      color: "#070605",
    },
  },
});

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .matches(/^[a-zA-Z]+$/, "Invalid first name. Only letters are allowed.")
    // .required('First name is required'),
    .required("This is a required field."),
  lastname: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("This is a required field."),
  email: Yup.string()
    .email("Invalid email")
    .required("This is a required field."),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required("This is a required field."),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is a required field."),
});

function Signup({ setLoginmodal }) {
  const [showpassword, setShowpassword] = useState(false);
  const [disabled,setDisabled] = useState(false);
  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setShowpassword((prevShowPassword) => !prevShowPassword);
  };

 const handleSubmit = async(values,{resetForm}) =>{
  setDisabled(true);
  try{
        const res = await axios.post("https://quickstart-1603869425824-default-rtdb.firebaseio.com/userdata.json",{
          body:{
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            password: values.password,
            confirmpassword: values.confirmpassword,
          }
        })
        if(res.status === 200){
          dispatch(adduser(values))
          toast.success("Signup Successfully");
          resetForm({values:''})
          setDisabled(false);
          setLoginmodal(false);
          Navigate("/login")
        }
  }
  catch(error){
    console.log(error);
  }
 }
  return (
    <Signupwrapper>
      <Container>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleChange, handleBlur, values }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box>
                    <img
                      src="/images/screenbg.png"
                      alt="Login"
                      loading="lazy"
                      style={{ width: "100%",height:'100%', borderRadius: "10px" }}
                    />
                  </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box>
                    <TextField
                      variant="outlined"
                      name="firstname"
                      placeholder="First Name"
                      value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      fullWidth
                      error={Boolean(touched.firstname && errors.firstname)}
                    />
                    <FormHelperText error>
                      {touched.firstname && errors.firstname}
                    </FormHelperText>
                  </Box>

                  <Box>
                    <TextField
                      variant="outlined"
                      placeholder="Last Name"
                      name="lastname"
                      fullWidth
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.lastname && errors.lastname)}
                    />
                    <FormHelperText error>
                      {touched.lastname && errors.lastname}
                    </FormHelperText>
                  </Box>

                  <Box>
                   
                    <TextField
                      variant="outlined"
                      placeholder="Email"
                      name="email"
                      fullWidth
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(touched.email && errors.email)}
                    />
                    <FormHelperText error>
                      {touched.email && errors.email}
                    </FormHelperText>
                  </Box>

                  <Box>
                    
                    <TextField
                      variant="outlined"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      error={Boolean(touched.password && errors.password)}
                      fullWidth
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
                  <Box>
                   
                    <TextField
                      variant="outlined"
                      placeholder="Confirm Password"
                      name="confirmpassword"
                      value={values.confirmpassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={Boolean(
                        touched.confirmpassword && errors.confirmpassword
                      )}
                      fullWidth
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
                      {touched.confirmpassword && errors.confirmpassword}
                    </FormHelperText>
                  </Box>
                  <Box pt={5} align="center">
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  type="submit"
                  disabled={disabled}
                >
                  Create an Account
                </Button>
              </Box>
                </Grid>
              </Grid>
             
            </Form>
          )}
        </Formik>
      </Container>
    </Signupwrapper>
  );
}
export default Signup;
