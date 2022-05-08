import React from "react";
import Image from "next/image";

import Layout from "../Layout/layout";

import styles from "./AdminNav.module.scss";

function AdminNav({ activeTab, setActiveTab }) {
  const handleClick = (id) => {
    setActiveTab(id);
  };

  const navItems = [
    {
      item: "Current",
      id: 1,
    },
    {
      item: "Drafts",
      id: 2,
    },
    {
      item: "Past",
      id: 3,
    },
  ];

  return (
    <div className={`${styles.nav}`}>
      <Layout>
        {/* Hamburger and text */}
        <div className={styles.nav_top}>
          <Image
            src="/hamburger.svg"
            alt="toggle show password"
            width={24}
            height={24}
          />
          <p
            className={`${styles.nav_top_event} ${styles.h3_black}`}
            style={{ color: "#344054" }}
          >
            Events
          </p>
        </div>

        <div className={`${styles.nav_bottom} ${styles.xlbody_medium}`}>
          {navItems.map((nav) => {
            return (
              <li onClick={handleClick(item.id)} key={nav.id}>
                {nav.item}
              </li>
            );
          })}
        </div>
      </Layout>
    </div>
  );
}

export default AdminNav;
