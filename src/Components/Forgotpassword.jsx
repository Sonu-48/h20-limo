import {
  Dialog,
  IconButton,
  Box,
  Typography,
  TextField,
  Button,
  styled,
  FormHelperText,
  Grid,
} from "@mui/material";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const ForgotWrapper = styled("div")({
  padding: "5px 40px",
  "& h6": {
    color: "#4878bf",
  },
  "& sup": {
    color: "red",
    fontSize: "15px",
  },
});

const ForgotSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required."),
});

function Forgotpassword({ showforgotmodal, setShowforgotmodal }) {
  const handleSubmit = (values, resetForm) => {
    console.log(values);
    resetForm({ value: "" });
  };
  return (
    <>
      <Dialog
        open={showforgotmodal}
        sx={{
          "& .MuiDialog-paper": { width: "700px" },
        }}
      >
        <Box align="end">
          <IconButton
            onClick={() => setShowforgotmodal(false)}
            sx={{
              background: "transparent!important",
              color: "#000!important",
            }}
          >
            <IoMdClose />
          </IconButton>
        </Box>
        <ForgotWrapper>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={ForgotSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, handleChange, handleBlur, values }) => (
              <Form>
                <Button
                  variant="contained"
                  color="primary"
                  component={Typography}
                  fullWidth
                  sx={{ color: "#fff!important" }}
                >
                  Lost Your Password
                </Button>
                <Grid container spacing={2} mt={2} pb={2}>
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
                        style={{ width: "100%", borderRadius: "10px" }}
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box pt={2}>
                      <Typography variant="body1" pb={1}>
                        Email <sup>*</sup>
                      </Typography>
                      <TextField
                        variant="outlined"
                        fullWidth
                        name="email"
                        value={values.name}
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.email && errors.email)}
                      />
                      <FormHelperText error>
                        {touched.email && errors.email}
                      </FormHelperText>
                    </Box>
                    <Box align="center" pt={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        type="password"
                        fullWidth
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </ForgotWrapper>
      </Dialog>
    </>
  );
}
export default Forgotpassword;
