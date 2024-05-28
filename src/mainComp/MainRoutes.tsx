import { Grid } from '@mui/material'
import React from 'react'
import Ragister from '../login/Ragister';
import Login from '../login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthGuard from '../AuthGaurd/Authgaurd';
import FormList from '../formList/FormList';
import AddDetails from '../formList/AddDetails';

class MainRoutes extends React.Component {
  render() {
    return (
      <Grid>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/signIn' exact component={Ragister} />
            <Route path='/formList' exact component={FormList} />
            <Route path='/addDetails' exact component={AddDetails} />
          </Switch>
        </BrowserRouter>

      </Grid>
    )
  }

}

export default MainRoutes