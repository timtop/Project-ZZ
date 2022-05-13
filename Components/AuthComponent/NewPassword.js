import React, { useState, useEffect } from "react";
import styles from "./signin.module.scss";
import Layout from "../Layout/layout";
import router from "next/router";
import Button from "../Button/Button";

const NewPassword = () => {
   const [btnDisabled, setBtnDisabled] = useState(true);
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   useEffect(() => {
      if (password < 1 || confirmPassword < 1) {
         setBtnDisabled(true);
      } else if (confirmPassword.match(password)) {
         setBtnDisabled(false);
      } else {
         setBtnDisabled(true);
      }
   }, [confirmPassword, password]);

   const handleSubmit = (e) => {
      e.preventDefault();

      console.log(`your password matched`);
      console.log(`your password is now being udpated`);

      router.push("PasswordUpdate");
   };

   return (
      <Layout>
         <div className={styles.desktop}>
            Please visit this page on a mobile device
         </div>

         <div className={`${styles.mobile}`}>
            <div>
               <div className={styles.h3_medium} style={{ color: "#344054" }}>
                  Create new password
               </div>
               <p className={styles.body_regular} style={{ color: "#98A2B3" }}>
                  Your new password must be different from the previous used
                  passwords. 🔒
               </p>
            </div>
         </div>

         <form onSubmit={handleSubmit} className={`${styles.signInForm} `}>
            <label htmlFor="password">
               <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className={`${styles.body_regular}`}
                  style={{ color: "#98A2B3" }}
                  value={password}
                  onChange={(e) => {
                     setPassword(e.target.value);
                  }}
               />
            </label>

            <br />
            <br />

            <label htmlFor="confirm_password">
               <input
                  id="confirm_password"
                  type="password"
                  placeholder="Confirm password"
                  className={`${styles.body_regular}`}
                  style={{ color: "#98A2B3" }}
                  value={confirmPassword}
                  onChange={(e) => {
                     setConfirmPassword(e.target.value);
                  }}
               />
            </label>

            <br />
            <br />

            <Button type="submit" isDisabled={btnDisabled}>
               Reset password
            </Button>
         </form>
      </Layout>
   );
};

export default NewPassword;
