import styles from "../styles/Home.module.scss";
import Layout from "../Components/Layout/layout";

export default function Home() {
  return (
    <Layout className={styles.container}>
      <div className={styles.desktop}>Visit on a mobile phone</div>
      <div className={styles.mobile}>This shows only on the mobile view</div>
    </Layout>
  );
}
