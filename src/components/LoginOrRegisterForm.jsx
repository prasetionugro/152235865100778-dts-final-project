import React, { useState, useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";

import {
  auth,
  loginDenganEmailDanPassword,
  registerDenganEmailDanPassword,
} from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

import styled from "styled-components";

import NavBar from "./NavBar";
import Footer from "./Footer";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  const [user, loading] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    loginDenganEmailDanPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    registerDenganEmailDanPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate("/");
    }
  }, [loading, user, navigate]);

  return (
    <>
      <NavBar />
      <ContainerForm>
        <FormWrapper>
          <label for="mail">Email:</label>
          <InputText
            type="email"
            id="mail"
            value={credential.email}
            onChange={textFieldEmailOnChangeHandler}
          />

          <label for="pass">Password:</label>
          <InputText
            type="text"
            id="pass"
            value={credential.password}
            onChange={textFieldPasswordOnChangeHandler}
          />

          <ButtonLogin
            type="button"
            onClick={buttonLoginOrRegisterOnClickHandler}
          >
            {loginOrRegister === "login" ? "Login" : "Register Account"}
          </ButtonLogin>

          {loginOrRegister === "login" ? (
            <Link to="/register">
              <p>Or do you want Register?</p>
            </Link>
          ) : (
            <Link to="/login">
              <p>Or do you want Login?</p>
            </Link>
          )}
        </FormWrapper>
      </ContainerForm>
      <Footer />
    </>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

const ContainerForm = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

const InputText = styled.input`
  margin-bottom: 1rem;
`;

const ButtonLogin = styled.button`
  background: linear-gradient(90deg, #00f28f, #00a1fb);
  outline: none;
  color: white;
  margin-bottom: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
`;

export default LoginOrRegisterForm;
