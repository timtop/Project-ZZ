import React, { useRef } from "react";
import Image from "next/image";
import Layout from "../../Components/Layout/layout";
import styles from "../../styles/report.module.scss";
import Link from "next/link";

function Reports() {
  const navRef = useRef();

  const openNav = () => {
    console.log("Nav open");
    navRef.current.style.width = "250px";
  };

  const closeNav = () => {
    console.log("Nav closed");
    navRef.current.style.width = "0";
  };

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
              Reports
            </p>
          </div>

          {/* Navigation */}
          {/* <div className={styles.nav_bottom}>
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
          </div> */}
        </Layout>
      </div>

      <div className={styles.wrapped}>
        <Layout>
          <div className={styles.card}>
            <p className={styles.h4_bold} style={{ color: "#344054" }}>
              Gethsemane: The Voice
            </p>
            <p className={styles.body_regular} style={{ color: "#98A2B3" }}>
              Tue, 21 Aug 2022
            </p>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default Reports;
