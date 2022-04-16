import React, { useState } from "react";
import styles from "./signin.module.scss";
import Layout from "../Layout/layout";
import Image from "next/image";
import Button from "../Button/Button";

function Signin({ changeSignIn }) {
  const [passwordShown, setPasswordShown] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);

  // Collecting the text
  const [text, setText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  console.log(text);
  console.log(passwordText);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
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
        <form className={`${styles.signInForm} `}>
          <label htmlFor="email">
            <input
              id="email"
              type="text"
              placeholder="Enter your email address"
              className={`${styles.body_regular}`}
              style={{ color: "#98A2B3" }}
              onChange={(e) => setText(e.target.value)}
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
              style={{ color: "#98A2B3" }}
              onChange={(e) => setPasswordText(e.target.value)}
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
        </form>

        <p>
          Forgot password? <span className={styles.undbtn}>Click here</span>
        </p>

        <Button type="submit" isDisabled={btnDisabled}>
          Login
        </Button>

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