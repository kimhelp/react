import { Axios } from "axios";
// import { response } from "express";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

function LoginPage() {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Email", Email, "PassWord", Password);
    let body = {
      email: Email,
      password: Password,
    };
    //actions
    dispatch(loginUser());
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler}></input>
        <label>Password</label>
        <input
          type="password"
          value={Password}
          onChange={onPasswordHandler}
        ></input>
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
