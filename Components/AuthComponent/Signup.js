import React, { useState, useEffect } from "react";
import Layout from "../Layout/layout";
import Image from "next/image";
import Button from "../Button/Button";
import styles from "./signup.module.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import toast ,{ Toaster, resolveValue } from 'react-hot-toast';

import Toastersomething from "../Toaster/Toastersomething";

function Signup({ changeSignIn }) {
   const [passwordShown, setPasswordShown] = useState(false);
   const [btnDisabled, setBtnDisabled] = useState(true);
   const [phoneNumber, setphoneNumber] = useState();

   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const notify = () => {
      toast('Hello World', {
        duration: 4000,
        position: 'top-right',
      });
    }

   const handleSubmit = async (e) => {
      e.preventDefault();
      await axios.post('https://project-z-api.herokuapp.com/signup', {
         firstName,lastName,email,phoneNumber,password
      })
      .then(data => console.log(data))
      .catch(err =>  notify())

   // console.log(err.response.data)
      
   }

// function handleSubmit(e) {
//    e.preventDefault();
//    const signUpDetails = {
//       firstName,lastName,email,password
//    };
//    console.log(signUpDetails);
// }
   useEffect(() => {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (
         !firstName ||
         !lastName ||
         !email.match(emailRegex) ||
         !phoneNumber ||
         !password
      ) {
         setBtnDisabled(true);
      } else {
         setBtnDisabled(false);
      }
   }, [email, firstName, lastName, password, phoneNumber]);

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

         <Toaster />
            <div>
               <div className={styles.h1_medium} style={{ color: "#344054" }}>
                  Sign up{" "}
               </div>
               <p className={styles.body_regular} style={{ color: "#98A2B3" }}>
                  Create an account to be a The New member 🤗
               </p>
            </div>

            {/* The form starts here */}
            <form onSubmit={handleSubmit} className={`${styles.signInForm} `}>
               <label htmlFor="firstName">
                  <input
                     id="firstName"
                     type="text"
                     placeholder="Enter your first name"
                     className={`${styles.body_regular}`}
                     style={{ color: "#344054" }}
                     value={firstName}
                     onChange={(e) => {
                        setFirstName(e.target.value);
                     }}
                  />
               </label>

               <br />
               <br />

               <label htmlFor="lastName">
                  <input
                     id="lastName"
                     type="text"
                     placeholder="Enter your last name"
                     className={`${styles.body_regular}`}
                     style={{ color: "#344054" }}
                     value={lastName}
                     onChange={(e) => {
                        setLastName(e.target.value);
                     }}
                  />
               </label>

               <br />
               <br />

               <label htmlFor="email">
                  <input
                     id="email"
                     type="email"
                     placeholder="Enter your email address"
                     className={`${styles.body_regular}`}
                     style={{ color: "#344054" }}
                     value={email}
                     onChange={(e) => {
                        setEmail(e.target.value);
                     }}
                  />
               </label>

               <br />
               <br />

               {/* <label htmlFor="phoneNumber">
            <input
              id="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
              className={`${styles.body_regular}`}
              style={{ color: "#98A2B3" }}
            />
          </label> */}

               <PhoneInput
                  placeholder="Enter your phone number"
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="NG"
                  value={phoneNumber}
                  onChange={setphoneNumber}
               />

               <br />

               <label htmlFor="password" className={styles.pass_wrapper}>
                  <input
                     id="password"
                     type={passwordShown ? "text" : "password"}
                     placeholder="Create a password"
                     className={`${styles.body_regular}`}
                     style={{ color: "#344054" }}
                     value={password}
                     onChange={(e) => {
                        setPassword(e.target.value);
                     }}
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

               {/* <p>
                  Forgot password?{" "}
                  <span className={styles.undbtn}>Click here</span>
               </p> */}

               <Button type="submit" isDisabled={btnDisabled} >
                  Sign up
               </Button>
            </form>

            <p>
               Already a member?{" "}
               <span className={styles.undbtn} onClick={changeSignIn}>
                  Log in
               </span>
            </p>
         </div>
      </Layout>
   );
}

export default Signup;
