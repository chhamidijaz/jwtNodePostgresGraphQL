import "./Home.css";
import GetUsers from "./GetUsers";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return (
    <>
      <GetUsers />
      <Link to="/auth">
        <button className="button">SignUp/Login</button>
      </Link>
    </>
  );
}

export default Home;
