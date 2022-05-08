import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/createevent.module.scss";
import Layout from "../../Components/Layout/layout";
import Button from "../../Components/Button/Button";

import Link from "next/link";

function CreateEvent() {
  const [eventImage, setEventImage] = useState("No file uploaded yet");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const [eventName, setEventName] = useState("");
  const [minister, setMinister] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [Ig, setIg] = useState("");
  const [youTube, setYouTube] = useState("");
  const [mixlr, setMixlr] = useState("");

  useEffect(() => {
    if (
      !eventName ||
      !minister ||
      !date ||
      !time ||
      !Ig ||
      !youTube ||
      !mixlr
    ) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [eventName, minister, date, time, Ig, youTube, mixlr]);

  const onImageChange = (e) => {
    setEventImage(e.target.files[0]);
  };

  const handleEventInput = (e) => {
    setEventName(e.target.value);
  };

  const handleMinisterInput = (e) => {
    setMinister(e.target.value);
  };

  const handleDateInput = (e) => {
    setDate(e.target.value);
  };

  const handleTimeInput = (e) => {
    setTime(e.target.value);
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const formValues = {
      eventImage,
      eventName,
      minister,
      date,
      time,
      Ig,
      youTube,
      mixlr,
    };
    console.log(formValues);
  };

  // console.log(eventImage);

  return (
    <Layout>
      <Link href="/admin/AdminEvent">
        <span className={styles.close}>
          <Image src="/close.svg" alt="close" width={40} height={40} />
        </span>
      </Link>

      <div className={styles.event}>
        <div style={styles.event_new}>
          <p
            className={styles.h2_bold}
            style={{ color: "#475467", lineHeight: "0px" }}
          >
            Create Event
          </p>
          <p className={styles.body_regular} style={{ color: "#475467" }}>
            Fill in the details for this event ✍🏾
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.eventForm}>
          {/* Upload image */}
          <div className={styles.event_banner}>
            <Image
              src="/mockimage.svg"
              alt="toggle show password"
              width={64}
              height={64}
            />
            <p>{!eventImage.name ? eventImage : eventImage.name}</p>
            <input
              type="file"
              accept="image/*"
              className={styles.event_fileupload}
              onChange={onImageChange}
            />{" "}
          </div>

          <br />

          {/* Event name */}
          <label htmlFor="eventName">
            <input
              id="eventName"
              type="text"
              placeholder="Enter name of event"
              className={`${styles.body_regular}`}
              style={{ color: "#98A2B3" }}
              onChange={handleEventInput}
              value={eventName}
            />
          </label>

          <br />
          <br />

          {/* Event minister name */}
          <label htmlFor="minister">
            <input
              id="minister"
              type="text"
              placeholder="Enter name of event minister"
              className={`${styles.body_regular}`}
              style={{ color: "#98A2B3" }}
              onChange={handleMinisterInput}
              value={minister}
            />
          </label>

          <br />
          <br />

          {/* Event date */}
          <label htmlFor="eventDate">
            <input
              id="eventDate"
              type="date"
              placeholder="Pick event date"
              className={`${styles.body_regular}`}
              style={{ color: "#98A2B3" }}
              onChange={handleDateInput}
              value={date}
            />
          </label>

          <br />
          <br />

          {/* Event time */}
          <label htmlFor="eventTime">
            <input
              id="eventTime"
              type="time"
              placeholder="04:00 AM"
              className={`${styles.body_regular}`}
              style={{ color: "#98A2B3" }}
              onChange={handleTimeInput}
              value={time}
            />
          </label>

          <br />
          <br />

          {/* Check-in Links sections */}
          <p className={styles.h4_medium} style={{ color: "#344054" }}>
            Check-in Links
          </p>

          <label htmlFor="YouTube">
            <input
              id="YouTube"
              type="text"
              placeholder="Enter YouTube event link"
              className={`${styles.body_regular}`}
              style={{ color: "#98A2B3" }}
              onChange={(e) => setYouTube(e.target.value)}
              value={youTube}
            />
          </label>

          <br />
          <br />

          <label htmlFor="Instagram">
            <input
              id="Instagram"
              type="text"
              placeholder="Enter Instagram event link"
              className={`${styles.body_regular}`}
              style={{ color: "#98A2B3" }}
              onChange={(e) => setIg(e.target.value)}
              value={Ig}
            />
          </label>

          <br />
          <br />

          <label htmlFor="Mixlr">
            <input
              id="Mixlr"
              type="text"
              placeholder="Enter Mixlr event link"
              className={`${styles.body_regular}`}
              style={{ color: "#98A2B3" }}
              onChange={(e) => setMixlr(e.target.value)}
              value={mixlr}
            />
          </label>

          <br />
          <br />

          <Button type="submit" isDisabled={btnDisabled}>
            Create Event
          </Button>
        </form>
      </div>
    </Layout>
  );
}

export default CreateEvent;
