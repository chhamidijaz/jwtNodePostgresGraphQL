import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const SignupLogin = () => {
  return (
    <div>
      <Link to="/signup">
        <Button>SignUp</Button>
      </Link>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </div>
  );
};

export default SignupLogin;
