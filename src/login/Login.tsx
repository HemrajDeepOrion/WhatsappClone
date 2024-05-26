import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as Yup from "yup";

interface LoginProps extends RouteComponentProps { }
interface MyLoginDetails {
  loginCred: Array<any> | null
  storeData: Array<any> | null
}

class Login extends React.Component<LoginProps, MyLoginDetails> {

  constructor(props: any) {
    super(props);
    this.state = {
      loginCred: null,
      storeData: null
    }
  }

  componentDidMount(): void {
    const data = localStorage.getItem("Ragister");
    if (data !== null) {
      const parsedData = JSON.parse(data);
      this.setState({
        storeData: parsedData
      });
    }
  }

  componentDidUpdate(prevProps: Readonly<LoginProps>, prevState: Readonly<MyLoginDetails>, snapshot?: any): void {
    localStorage.setItem("redirectRoute", JSON.stringify(this.state.loginCred))
    console.log(this.state.loginCred);

  }
  
  initialValues = {
    email: "",
    password: ""
  }

  validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required("Name Is Required")
  })
  handleSignIn = () => {
    this.props.history.push('/signIn');
  }
  render() {
    return (

      <Grid sx={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#000080",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}>
        <Grid>
          {
            this.state.loginCred === undefined ? (
              <Container sx={{ color: "red", textAlign: "center" }}>
                <Typography variant='h6'>No User Found Please Sign UP !</Typography>
              </Container>
            ) : null
          }
          <Grid sx={{
            backgroundColor: "pink",
            width: "30rem",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.125)",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}>
            <Grid sx={{ display: "flex", flexDirection: "column", gap: "3.5rem", padding: "30px" }}>
              <Box sx={{ textAlign: "center", color: "blue" }}>
                <Typography variant='h4'>Login Here !</Typography>
                <Typography variant='h6'>How do I get started Lorem ipsum dolor sit.</Typography>
              </Box>
              <Formik
                initialValues={this.initialValues}
                validationSchema={this.validationSchema}
                onSubmit={(values, { resetForm }) => {
                  let newData = this.state.storeData?.find((item: any) => {
                    return (item.email === values.email);
                  });
                  this.setState({
                    loginCred: newData
                  })
                  resetForm();
                }}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }: any) => {
                  return (
                    <Form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                      <Stack spacing={4} sx={{ maxWidth: '25rem' }}>
                        <TextField
                          label='Email'
                          name='email'
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.email && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                        ></TextField>
                        <TextField
                          label="Password"
                          name='password'
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.password && Boolean(errors.password)}
                          helperText={touched.password && errors.password}
                        ></TextField>
                      </Stack>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Box sx={{ display: "flex", justifyContent: "center", width: "100%", height: "2.8rem" }}>
                          <Button
                            // onClick={this.handleMatch}
                            type='submit'
                            sx={{
                              borderRadius: "10px", width: "100%",
                              bgcolor: "#0038FF", height: "100%", color: "white",
                              '&:hover': {
                                fontSize: "15px",
                                backgroundColor: '#0038FF',
                              },
                            }} >Login Now</Button>
                        </Box>
                        <Box
                          sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Typography sx={{ color: "black" }}>Don't have any Account ?</Typography>
                          <Button variant="text" onClick={this.handleSignIn}>Sign Up</Button>
                        </Box>
                      </Box>
                    </Form>
                  )
                }}
              </Formik>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withRouter(Login);