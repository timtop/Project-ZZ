/* eslint-disable @next/next/link-passhref */
import React, { useState, useEffect } from "react";
import styles from "./signin.module.scss";
import Layout from "../Layout/layout";
import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

function Signin({ changeSignIn }) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Collecting the text
  const [text, setText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  useEffect(() => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!text.match(emailRegex) || !passwordText) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [text, passwordText]);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleTextChanges = (e) => {
    setText(e.target.value);
  };

  const handlePasswordChanges = (e) => {
    setPasswordText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await axios
      .post("https://project-z-api.herokuapp.com/check-in", {
        text,
        passwordText,
      })
      .then((data) => {
        console.log(data);
        console.log(data.data.session_id);
        setIsLoading(false);
        data.data.session_id ? router.push("/Authmode/ChekedIn") : null;
      })
      // .then(router.push('/Authmode/ChekedIn'))
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <Layout>
      {/* Show this on a web view */}
      <div className={styles.desktop}>
        Please visit this page on a mobile device
      </div>

      {/* Show this on a mobile view */}
      {/* The header on top of the form */}
      <div className={`${styles.mobile}`}>
        <div>
          <div className={styles.h1_medium} style={{ color: "#344054" }}>
            Log in
          </div>
          <p className={styles.body_regular} style={{ color: "#98A2B3" }}>
            Input your details to confirm your check-in 😊
          </p>
        </div>

        {/* The form starts here */}
        <div>
          {/* <h1>Loading....</h1> */}
          {isLoading ? <h1>Loading....</h1> : null}
        </div>
        <form onSubmit={handleSubmit} className={`${styles.signInForm} `}>
          <label htmlFor="email">
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className={`${styles.body_regular}`}
              style={{ color: "#344054" }}
              onChange={handleTextChanges}
              value={text}
            />
          </label>

          <br />
          <br />

          <label htmlFor="password" className={styles.pass_wrapper}>
            <input
              id="password"
              type={passwordShown ? "text" : "password"}
              placeholder="Enter your password"
              className={`${styles.body_regular}`}
              style={{ color: "#344054" }}
              onChange={handlePasswordChanges}
            />
            <span
              className={`${styles.pass_eye}`}
              onClick={togglePasswordVisiblity}
            >
              <Image
                src="/show.svg"
                alt="toggle show password"
                width={24}
                height={24}
              />
            </span>
          </label>

          <p>
            Forgot password?
            <Link href="/Authmode/ResetPassword">
              <span className={styles.undbtn}> Click here</span>
            </Link>
          </p>

          <Button type="submit" isDisabled={btnDisabled}>
            Login
          </Button>
        </form>

        <p>
          Are you a new member?{" "}
          <span className={styles.undbtn} onClick={changeSignIn}>
            Sign up here
          </span>
        </p>
      </div>
    </Layout>
  );
}

export default Signin;
