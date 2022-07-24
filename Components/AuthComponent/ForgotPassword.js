import React, { useState, useEffect } from "react";
import styles from "./signin.module.scss";
import Layout from "../Layout/layout";
import router from "next/router";
import Button from "../Button/Button";
import BackRouter from "../BackRouter/BackRouter";

const ForgotPassword = () => {
   const [email, setEmail] = useState("");
   const [btnDisabled, setBtnDisabled] = useState(true);

   useEffect(() => {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (email.match(emailRegex)) {
         setBtnDisabled(false);
      } else {
         setBtnDisabled(true);
      }
   }, [email]);

   const handleSubmit = (e) => {
      e.preventDefault();

      console.log(`you entered ${email}`);
      console.log(
         "this is an async function that send the recovery link to the email provided then routes to the open mail page"
      );

      router.push("/Authmode/OpenMail");
      setEmail("");
   };

   return (
      <Layout>
         <BackRouter route={"/Authmode"} />
         <div className={styles.desktop}>
            Please visit this page on a mobile device
         </div>

         <div className={`${styles.mobile}`}>
            <div>
               <div className={styles.h3_medium} style={{ color: "#344054" }}>
                  Reset password
               </div>
               <p className={styles.body_regular} style={{ color: "#98A2B3" }}>
                  Enter your email associated with your TheNew account and
                  we&#39;ll send you an instructions to reset your password. 
               </p>
            </div>
         </div>

         <form onSubmit={handleSubmit} className={`${styles.signInForm} `}>
            <label htmlFor="email">
               <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className={`${styles.body_regular}`}
                  style={{ color: "#98A2B3" }}
                  value={email}
                  onChange={(e) => {
                     setEmail(e.target.value);
                  }}
               />
            </label>

            <br />
            <br />

            <Button type="submit" isDisabled={btnDisabled}>
               Send Instructions
            </Button>
         </form>
      </Layout>
   );
};

export default ForgotPassword;
