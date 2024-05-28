import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

class AddDetails extends React.Component {
  render(): React.ReactNode {
    return (
      <Grid>
        <Grid>
          <Container maxWidth={false} disableGutters>
            <Box sx={{ padding: "20px" }}>
              <Typography variant='h4'>Details</Typography>
            </Box>
            <Container sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 5, mt: "4rem" }}>
              <Stack>
                <Typography variant='h6'>First Name</Typography>
                <TextField id="first-name" label="First Name" variant="outlined" />
              </Stack>
              <Stack>
                <Typography variant='h6'>Middle Name</Typography>
                <TextField id="middle-name" label="Middle Name" variant="outlined" />
              </Stack>
              <Stack>
                <Typography variant='h6'>Last Name</Typography>
                <TextField id="last-name" label="Last Name" variant="outlined" />
              </Stack>
              <Stack sx={{ width: "100%" }}>
                <Typography variant='h6'>DOB</Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Basic date picker" />
                </LocalizationProvider>
              </Stack>
              <Stack>
                <Typography variant='h6'>Gender</Typography>
                <FormControl fullWidth>
                  <InputLabel id="Gender">Gender</InputLabel>
                  <Select
                    labelId="Gender"
                    id="Gender"
                    label="Gender"
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="FeMale">FeMale</MenuItem>
                    <MenuItem value="Otner">Other</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack>
                <Typography variant='h6'>Email</Typography>
                <TextField id="email" label="Email" variant="outlined" />
              </Stack>
              <Stack>
                <Typography variant='h6'>Contact No.</Typography>
                <TextField id="contact-no" label="Contact No." variant="outlined" />
              </Stack>
              <Stack>
                <Typography variant='h6'>Marital Status</Typography>
                <FormControl fullWidth>
                  <InputLabel id="Maritial Status">Maritial Status</InputLabel>
                  <Select
                    labelId="Maritial Status"
                    id="Maritial Status"
                    label="Maritial Status"
                  >
                    <MenuItem value="Male">Married</MenuItem>
                    <MenuItem value="FeMale">UnMarried</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Container>
            <Container sx={{ padding: "80px", display: "flex", gap: 4, justifyContent: "flex-end" }}>
              <Button variant='outlined'>Cancel</Button>
              <Button variant='contained'>Save</Button>
            </Container>
          </Container>
        </Grid>
      </Grid>
    );
  }
}

export default AddDetails;
