import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
      <button className="form-submit-button">Login</button>
    </div>
  );
};

export default Login;
