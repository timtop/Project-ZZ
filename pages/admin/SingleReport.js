import React from "react";
import Layout from "../../Components/Layout/layout";
import Image from "next/image";
import styles from "../../styles/singlereport.module.scss";
import Link from "next/link";

function SingleReport() {
  return (
    <div>
      {/* Navigation */}
      <div className={`${styles.nav}`}>
        <Layout>
          {/* Hamburger and text */}
          <div className={styles.nav_top}>
            <Link href="/admin/Reports" passHref>
              <Image
                src="/Arrowleft.svg"
                alt="toggle show password"
                width={33}
                height={33}
              />
            </Link>

            <p
              className={`${styles.nav_top_event} ${styles.h3_black}`}
              style={{ color: "#344054" }}
            >
              Reports
            </p>
          </div>
        </Layout>
      </div>

      {/* List of attendees */}
      <div className={styles.wrapped}>
        <Layout>
          <div className={styles.card}>
            {/* Name and email */}
            <div>
              <p className={styles.body_xs_medium} style={{ color: "#475467" }}>
                Oluwarotimi Amaechi
              </p>
              <p
                className={styles.body_xs_regular}
                style={{ color: "#98A2B3" }}
              >
                rotimiforpres2023@gmail.com
              </p>
            </div>
            {/* Venue and time */}
            <div>
              <p className={styles.body_xs_medium} style={{ color: "#667085" }}>
                Online
              </p>
              <p
                className={styles.body_xs_regular}
                style={{ color: "#667085" }}
              >
                10:19 am
              </p>
            </div>
          </div>

          <div className={styles.card}>
            {/* Name and email */}
            <div>
              <p className={styles.body_xs_medium} style={{ color: "#475467" }}>
                Oluwarotimi Amaechi
              </p>
              <p
                className={styles.body_xs_regular}
                style={{ color: "#98A2B3" }}
              >
                rotimiforpres2023@gmail.com
              </p>
            </div>
            {/* Venue and time */}
            <div>
              <p className={styles.body_xs_medium} style={{ color: "#667085" }}>
                Online
              </p>
              <p
                className={styles.body_xs_regular}
                style={{ color: "#667085" }}
              >
                10:19 am
              </p>
            </div>
          </div>

          <div className={styles.card}>
            {/* Name and email */}
            <div>
              <p className={styles.body_xs_medium} style={{ color: "#475467" }}>
                Oluwarotimi Amaechi
              </p>
              <p
                className={styles.body_xs_regular}
                style={{ color: "#98A2B3" }}
              >
                rotimiforpres2023@gmail.com
              </p>
            </div>
            {/* Venue and time */}
            <div>
              <p className={styles.body_xs_medium} style={{ color: "#667085" }}>
                Online
              </p>
              <p
                className={styles.body_xs_regular}
                style={{ color: "#667085" }}
              >
                10:19 am
              </p>
            </div>
          </div>

          <div className={styles.card}>
            {/* Name and email */}
            <div>
              <p className={styles.body_xs_medium} style={{ color: "#475467" }}>
                Oluwarotimi Amaechi
              </p>
              <p
                className={styles.body_xs_regular}
                style={{ color: "#98A2B3" }}
              >
                rotimiforpres2023@gmail.com
              </p>
            </div>
            {/* Venue and time */}
            <div>
              <p className={styles.body_xs_medium} style={{ color: "#667085" }}>
                Onsite
              </p>
              <p
                className={styles.body_xs_regular}
                style={{ color: "#667085" }}
              >
                10:19 am
              </p>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default SingleReport;
