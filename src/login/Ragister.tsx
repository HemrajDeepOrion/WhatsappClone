import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { Form, Formik } from 'formik';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as Yup from "yup";

interface RagisterProps extends RouteComponentProps { }
interface MyFormState {
  ragisterCred: Array<any>
};

class Ragister extends React.Component<RagisterProps, MyFormState> {

  constructor(props: any) {
    super(props);
    this.state = {
      ragisterCred: []
    }
  }

  componentDidUpdate(prevProps: Readonly<RagisterProps>, prevState: Readonly<MyFormState>, snapshot?: any): void {
    localStorage.setItem("Ragister", JSON.stringify(this.state.ragisterCred))
  }

  initialValues = {
    name: "",
    email: "",
    password: ""
  }

  validationSchema = Yup.object({
    name: Yup.string().required("Name Is Required"),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required("Name Is Required")
  })

  handleLogin = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <Grid sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}>
        <Grid sx={{
          background: "pink",
          width: "30rem",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.125)",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignContent: "center"
        }}>
          <Grid sx={{ display: "flex", flexDirection: "column", gap: "3.5rem", padding: "30px" }}>
            <Box sx={{ textAlign: "center", color: "blue" }}>
              <Typography variant='h4'>Ragister Here !</Typography>
              <Typography variant='h6'>How do I get started Lorem ipsum dolor sit.</Typography>
            </Box>
            <Formik
              initialValues={this.initialValues}
              validationSchema={this.validationSchema}
              onSubmit={(values, { resetForm }) => {
                this.setState({
                  ragisterCred: [values, ...this.state.ragisterCred]
                })
                resetForm();

              }}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit }: any) => {
                return (
                  <Form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", gap:"2rem"}}>
                    <Stack spacing={4} sx={{ maxWidth: '25rem' }}>
                      <TextField label='name' name='name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                      ></TextField>
                      <TextField label='Email' name='email'
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      ></TextField>
                      <TextField label="Password" name='password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                      ></TextField>
                    </Stack>
                    <Box sx={{ display: "flex", flexDirection: "column",}}>
                      <Box sx={{ display: "flex", justifyContent: "center", width: "100%",height:"2.8rem"}}>
                        <Button
                          type='submit'
                          sx={{
                            borderRadius: "10px", width: "100%",height:"100%",
                            bgcolor: "#0038FF", color: "white",
                            '&:hover': {
                              fontSize: "15px",
                              backgroundColor: '#0038FF',
                            },
                          }} >Sign Up Now</Button>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Typography sx={{ color: "black" }}>Already have an Account ?</Typography>
                        <Button variant="text" onClick={this.handleLogin}>Login</Button>
                      </Box>
                    </Box>
                  </Form>
                )

              }}

            </Formik>
          </Grid>
        </Grid>
      </Grid>
    )
  }

}

export default Ragister