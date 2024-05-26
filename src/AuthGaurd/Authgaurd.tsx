import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface AuthGuardProps extends RouteProps {
    component: any
  }
interface AuthProps {
    isAuthenticated: boolean
  }

class AuthGuard extends React.Component<AuthGuardProps , AuthProps> {
  constructor(props:AuthGuardProps) {
    super(props);
    // Simulate authentication state, you should replace this with your actual authentication logic
    this.state = {
      isAuthenticated: false,
    };
  }

  render() {
    const { component: Component, ...rest } = this.props;
    const { isAuthenticated } = this.state;

    return (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }
}

export default AuthGuard;
