import { Grid } from '@mui/material'
import React from 'react'
import Ragister from '../login/Ragister';
import Login from '../login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthGuard from '../AuthGaurd/Authgaurd';
import FormList from '../formList/FormList';

class MainRoutes extends React.Component {
  render() {
    return (
      <Grid>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/signIn' exact component={Ragister} />
            <Route path='/formList' exact component={FormList} />
          </Switch>
        </BrowserRouter>

      </Grid>
    )
  }

}

export default MainRoutes