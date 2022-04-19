import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout/layout";
import Image from "next/image";
import styles from "../styles/Event.module.scss";
import Button from "../Components/Button/Button";

function Event() {
  const [selectedOption, setSelectedOption] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  //   console.log(selectedOption);

  useEffect(() => {
    if (selectedOption === "") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [selectedOption]);

  //   const handleChange = (e) => {
  //     setSelectedOption(e.target.value);
  //     if (selectedOption === "") {
  //       setBtnDisabled(true);
  //     } else {
  //       setBtnDisabled(false);
  //     }
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedOption);

    // Redirect to the selected platform
  };

  return (
    <Layout>
      {/* Show this on a web view */}
      <div className={styles.desktop}>
        Please visit this page on a mobile device
      </div>

      <div className={styles.mobile}>
        <div className={styles.header}>
          {/* Logo */}
          <Image
            src="/project_logo.svg"
            alt="project logo"
            width={39}
            height={38}
          />
          {/* Profile image */}
          <div>
            <Image
              src="/project_logo.svg"
              alt="project logo"
              width={39}
              height={38}
            />
          </div>
        </div>
        <div className={styles.hero_img}>
          <Image
            src="/program_img.png"
            alt="project logo"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div
          className={`${styles.hero_title} ${styles.h3_medium}`}
          style={{ color: "#344054" }}
        >
          Gethsemane: The Voice
        </div>

        <div className={styles.hero_minister}>
          <span className={styles.body_sm_regular} style={{ color: "#98A2B3" }}>
            Ministeration by:{" "}
          </span>{" "}
          <span className={styles.body_sm_regular} style={{ color: "#344054" }}>
            Pastor Shola Okodugha
          </span>
        </div>

        <div className={styles.hero_time}>
          <Image
            src="/Calendar.svg"
            alt="project logo"
            width={24}
            height={24}
          />
          <div className={styles.hero_time_desc}>
            <span
              className={styles.body_sm_regular}
              style={{ color: "#98A2B3" }}
            >
              Date & Time
            </span>
            <span className={styles.body_regular} style={{ color: "#344054" }}>
              Tue, 21 Aug 2022
            </span>
            <span className={styles.body_regular} style={{ color: "#344054" }}>
              6:30 PM
            </span>
          </div>
        </div>

        <div className={styles.hero_location}>
          <Image
            src="/Location.svg"
            alt="project logo"
            width={24}
            height={24}
          />
          <div className={styles.hero_location_desc}>
            <span
              className={styles.body_sm_regular}
              style={{ color: "#98A2B3" }}
            >
              Location
            </span>
            <span className={styles.body_regular} style={{ color: "#344054" }}>
              {" "}
              The Charis Center
            </span>
            <span className={styles.body_regular} style={{ color: "#344054" }}>
              6, Etal Avenue, Oregun, Lagos
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.hero_checkin}>
          <div className={styles.h4_medium} style={{ color: "#344054" }}>
            Check-in
          </div>

          <div className={styles.body_xs_regular} style={{ color: "#98A2B3" }}>
            Confirm attendance by selecting one of the platforms below
          </div>

          <div className={styles.hero_checkin_platforms}>
            <label>
              <input
                type="radio"
                name="test"
                value="youtube"
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
                checked={selectedOption === "youtube"}
                className={styles.input}
              />
              <Image
                src="/youtube.svg"
                alt="project logo"
                width="64"
                height="64"
              />
            </label>

            <label>
              <input
                type="radio"
                name="test"
                value="instagram"
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
                checked={selectedOption === "instagram"}
                className={styles.input}
              />
              <Image
                src="/instagram.svg"
                alt="project logo"
                width="64"
                height="64"
              />
            </label>

            <label>
              <input
                type="radio"
                name="test"
                value="mixlr"
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
                checked={selectedOption === "mixlr"}
                className={styles.input}
              />
              <Image
                src="/mixlr.svg"
                alt="project logo"
                width="64"
                height="64"
              />
            </label>
          </div>

          <div className={styles.hero_checkin_platforms}>
            <Button type="submit" isDisabled={btnDisabled}>
              Join Event
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Event;
