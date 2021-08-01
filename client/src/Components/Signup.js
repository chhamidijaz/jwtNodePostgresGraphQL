import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import "./Form.css";
import { useHistory } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: () => {
      history.push("/");
    },
  });

  const addUser = () => {
    createUser({
      variables: {
        name: name,
        email: email,
        password: password,
        role: role,
      },
    });
    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>SignUp</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Role"
        onChange={(e) => {
          setRole(e.target.value);
        }}
      />
      <button className="form-submit-button" onClick={addUser}>
        SignUp
      </button>
    </div>
  );
}

export default Signup;
