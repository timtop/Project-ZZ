import React, { useState, useRef } from "react";
// import AdminNav from "../../Components/AdminNav/AdminNav";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/adminevent.module.scss";
import Layout from "../../Components/Layout/layout";
import TabNavItem from "../../Components/Tabs/TabNavItem";
import TabContent from "../../Components/Tabs/TabContent";

function AdminEvent() {
  const [activeTab, setActiveTab] = useState("tab1");
  const navRef = useRef();

  const openNav = () => {
    console.log("Nav open");
    navRef.current.style.width = "250px";
  };

  const closeNav = () => {
    console.log("Nav closed");
    navRef.current.style.width = "0";
  };

  const currentEvent = [
    {
      name: "The Voice",
      minister: "Pst. Shola Okodugha",
      time: "6:30PM",
      date: "Tue, 21 Aug 2022",
    },
    {
      name: "The Spirit",
      minister: "Pst. Shola Okodugha",
      time: "6:30PM",
      date: "Tue, 21 Aug 2022",
    },
    {
      name: "The Body",
      minister: "Pst. Shola Okodugha",
      time: "6:30PM",
      date: "Tue, 21 Aug 2022",
    },
  ];

  return (
    <div>
      {/* Navigation */}
      <div className={`${styles.nav}`}>
        {/* Sidenav items begins*/}
        <div id="mySidenav" ref={navRef} className={styles.sidenav}>
          <a className={styles.closebtn} onClick={closeNav}>
            &times;
          </a>
          <Link href="/admin/AdminEvent">Events</Link>
          <Link href="/admin/Reports">Report</Link>
          <Link href="#">Settings</Link>
        </div>
        {/* Sidenav items ends*/}

        <Layout>
          {/* Hamburger and text */}
          <div className={styles.nav_top}>
            <div onClick={openNav}>
              <Image
                src="/hamburger.svg"
                alt="toggle show password"
                width={24}
                height={24}
              />
            </div>

            <p
              className={`${styles.nav_top_event} ${styles.h3_black}`}
              style={{ color: "#344054" }}
            >
              Events
            </p>
          </div>

          {/* Navigation */}
          <div className={styles.nav_bottom}>
            <TabNavItem
              title="Current"
              id="tab1"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabNavItem
              title="Draft"
              id="tab2"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabNavItem
              title="Past"
              id="tab3"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </Layout>
      </div>

      {/* <AdminNav activeTab={activeTab} setActiveTab={setActiveTab} /> */}

      {/* The cards display */}
      <div className={styles.wrappercard}>
        <Layout>
          {/* Current */}
          <TabContent id="tab1" activeTab={activeTab}>
            <div>
              {currentEvent.map((e, index) => {
                return (
                  <div key={index} className={styles.card}>
                    <p className={styles.h4_bold} style={{ color: "#344054" }}>
                      {e.name}
                    </p>
                    <p>
                      <span
                        className={styles.body_regular}
                        style={{ color: "#98A2B3" }}
                      >
                        Ministeration by:
                      </span>
                      <span
                        className={styles.body_regular}
                        style={{ color: "#344054" }}
                      >
                        {e.minister}
                      </span>
                    </p>
                    <p
                      className={styles.body_medium}
                      style={{ color: "#475467" }}
                    >
                      {e.date}
                    </p>
                    <p
                      className={styles.body_regular}
                      style={{ color: "#475467" }}
                    >
                      {e.time}
                    </p>
                  </div>
                );
              })}
            </div>
          </TabContent>

          {/* Drafts */}
          <TabContent id="tab2" activeTab={activeTab}>
            <div className={styles.card}>
              <p className={styles.h4_bold} style={{ color: "#344054" }}>
                Gethsemane: The Voice
              </p>
              <p>
                <span
                  className={styles.body_regular}
                  style={{ color: "#98A2B3" }}
                >
                  Ministeration by:
                </span>
                <span
                  className={styles.body_regular}
                  style={{ color: "#344054" }}
                >
                  {" "}
                  Pastor Shola Okodugha
                </span>
              </p>
              <p className={styles.body_medium} style={{ color: "#475467" }}>
                Tue, 21 Aug 2022
              </p>
              <p className={styles.body_regular} style={{ color: "#475467" }}>
                6:30 PM
              </p>
            </div>

            <div className={styles.card}>
              <p className={styles.h4_bold} style={{ color: "#344054" }}>
                Gethsemane: The Voice
              </p>
              <p>
                <span
                  className={styles.body_regular}
                  style={{ color: "#98A2B3" }}
                >
                  Ministeration by:
                </span>
                <span
                  className={styles.body_regular}
                  style={{ color: "#344054" }}
                >
                  {" "}
                  Pastor Shola Okodugha
                </span>
              </p>
              <p className={styles.body_medium} style={{ color: "#475467" }}>
                Tue, 21 Aug 2022
              </p>
              <p className={styles.body_regular} style={{ color: "#475467" }}>
                6:30 PM
              </p>
            </div>
          </TabContent>

          {/* Past */}
          <TabContent id="tab3" activeTab={activeTab}>
            <div className={styles.card}>
              <p className={styles.h4_bold} style={{ color: "#344054" }}>
                Gethsemane: The Voice
              </p>
              <p>
                <span
                  className={styles.body_regular}
                  style={{ color: "#98A2B3" }}
                >
                  Ministeration by:
                </span>
                <span
                  className={styles.body_regular}
                  style={{ color: "#344054" }}
                >
                  {" "}
                  Pastor Shola Okodugha
                </span>
              </p>
              <p className={styles.body_medium} style={{ color: "#475467" }}>
                Tue, 21 Aug 2022
              </p>
              <p className={styles.body_regular} style={{ color: "#475467" }}>
                6:30 PM
              </p>
            </div>

            <div className={styles.card}>
              <p className={styles.h4_bold} style={{ color: "#344054" }}>
                Gethsemane: The Voice
              </p>
              <p>
                <span
                  className={styles.body_regular}
                  style={{ color: "#98A2B3" }}
                >
                  Ministeration by:
                </span>
                <span
                  className={styles.body_regular}
                  style={{ color: "#344054" }}
                >
                  {" "}
                  Pastor Shola Okodugha
                </span>
              </p>
              <p className={styles.body_medium} style={{ color: "#475467" }}>
                Tue, 21 Aug 2022
              </p>
              <p className={styles.body_regular} style={{ color: "#475467" }}>
                6:30 PM
              </p>
            </div>
          </TabContent>
        </Layout>
      </div>

      {/* Add a new item */}
      <Link href="/admin/CreateEvent" passHref>
        <div className={styles.addbtn}>
          <Image src="/Cross.svg" alt="Add new event" width={80} height={80} />
        </div>
      </Link>
    </div>
  );
}

export default AdminEvent;
