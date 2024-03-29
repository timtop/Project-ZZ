import React, { useState } from "react";
import Layout from "../../Components/Layout/layout";
import Button from "../../Components/Button/Button";
import Image from "next/image";
import styles from "../../Components/AuthComponent/signin.module.scss";
import adminstyles from "../../styles/adminsignin.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useRouter } from "next/router";

function AdminSignin() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const router = useRouter();

  // Collecting the text
  const [text, setText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleTextChanges = (e) => {
    if (text !== "" && passwordText !== "") {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }

    setText(e.target.value);
  };

  const handlePasswordChanges = (e) => {
    if (text !== "" && passwordText !== "") {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }

    setPasswordText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginDetails = {
      text,
      passwordText,
    };
    console.log(loginDetails);

    await axios
      .post("https://project-z-api.herokuapp.com/admin/login", loginDetails)
      .then((data) => {
        console.log(data);
        console.log(data.data.auth_token);
        data.data.auth_token ? router.push("/admin/AdminEvent") : null;
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className={styles.mobile}>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
        >
          <div className={adminstyles.slider_parent}>
            <Image
              src="/Slider.png"
              alt="project logo"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div
              className="legend"
              style={{
                background: "none",
                padding: "none",
                textAlign: "left",
                opacity: "1",
              }}
            >
              {" "}
              <p className={styles.h3_medium}>To Connect</p>
              <p className={styles.body_regular}>
                Creating an avenue for the body of Christ to connect from any
                location in the world.
              </p>
            </div>
          </div>

          <div className={adminstyles.slider_parent}>
            <Image
              src="/Slider-2.png"
              alt="project logo"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div
              className="legend"
              style={{
                background: "none",
                padding: "none",
                textAlign: "left",
                opacity: "1",
              }}
            >
              {" "}
              <p className={styles.h3_medium}>To Build</p>
              <p className={styles.body_regular}>
                Building a supernatural army with the knowledge of the Word and
                the Spirit
              </p>
            </div>
          </div>

          <div className={adminstyles.slider_parent}>
            <Image
              src="/Slider-3.png"
              alt="project logo"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div
              className="legend"
              style={{
                background: "none",
                padding: "none",
                textAlign: "left",
                opacity: "1",
              }}
            >
              {" "}
              <p className={styles.h3_medium}>To Worship</p>
              <p className={styles.body_regular}>
                A channel for the body of Christ to worship and marvel in the
                presence of the Creator
              </p>
            </div>
          </div>
        </Carousel>
      </div>

      <Layout>
        {/* Show this on a web view */}
        <div className={styles.desktop}>
          Please visit this page on a mobile device
        </div>

        {/* Show this on a mobile view */}
        {/* The header on top of the form */}
        <div className={`${styles.mobile} ${adminstyles.spacer}`}>
          <div>
            <div className={styles.h2_medium} style={{ color: "#344054" }}>
              Welcome Admin
            </div>
            <p className={styles.body_regular} style={{ color: "#98A2B3" }}>
              Enter your credientials to access dashboard{" "}
            </p>
          </div>

          {/* The form starts here */}
          <form onSubmit={handleSubmit} className={`${styles.signInForm} `}>
            <label htmlFor="email">
              <input
                id="email"
                type="text"
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
              Forgot password? <span className={styles.undbtn}>Click here</span>
            </p>

            <Button type="submit" isDisabled={btnDisabled}>
              Login
            </Button>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default AdminSignin;
