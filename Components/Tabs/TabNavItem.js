import React from "react";
import styles from "./tabNav.module.scss";

function TabNavItem({ id, title, activeTab, setActiveTab }) {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <div
      className={`${styles.body_medium} 
      ${styles[`${activeTab === id ? "tabactive" : "tabunactive"}`]}`}
    >
      <li onClick={handleClick}>{title}</li>
    </div>
  );
}

export default TabNavItem;
