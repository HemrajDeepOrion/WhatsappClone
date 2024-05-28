import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

import { RouteComponentProps, withRouter } from 'react-router-dom';
interface FormListProps extends RouteComponentProps { }

class FormList extends React.Component<FormListProps> {

  handlelLogOut = () => {
    this.props.history.push("/")
  }

  handleAddDetails = () => {
    this.props.history.push("/addDetails")
  }

  render() {
    return (
      <Grid>
        <Grid>
          <Container maxWidth={false} disableGutters>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", padding: "25px", bgcolor: "greenyellow" }}>
                <Box sx={{ display: "flex", gap: "6rem", ml: "3rem" }}>
                  <Typography variant='h6'>Home</Typography>
                  <Typography variant='h6'>About</Typography>
                  <Typography variant='h6'>Contact Us</Typography>
                </Box>
                <Box>
                  <Button sx={{ mr: "3rem", fontSize: "1rem", color: "red", borderColor: "red", ":hover": { borderColor: "red", fontSize: "1.01rem" } }} variant='outlined'
                    onClick={this.handlelLogOut}
                  >Log Out</Button>
                </Box>
              </Box>
              <Box sx={{ padding: "30px", display: "flex", justifyContent: "end" }}>
                <Button sx={{ bgcolor: "green", color: "white", fontSize: "17px",
                 ":hover": { color: "yellow", bgcolor: "darkgreen", fontSize: "18px" } }}
                 onClick={this.handleAddDetails}
                 >Add Details</Button>
              </Box>
              <Box sx={{paddingX:"30px"}}>
                <Box sx={{ display: "flex", padding: "20px", justifyContent: "space-between", backgroundColor: "pink" }} >
                  <Typography>First Name</Typography>
                  <Typography>Middle Name</Typography>
                  <Typography>Last Name</Typography>
                  <Typography>DOB</Typography>
                  <Typography>Gender</Typography>
                  <Typography>Email</Typography>
                  <Typography>Contact No.</Typography>
                  <Typography>Maritial Status</Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>
    )
  }


}

export default withRouter(FormList);