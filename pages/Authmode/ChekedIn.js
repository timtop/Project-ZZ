import styles from "../../styles/checkedin.module.scss";
import Layout from "../../Components/Layout/layout";
import Image from "next/image";
import checked from "../../public/checked.png";

const OpenMail = () => {
   return (
      <Layout>
         <div className={styles.desktop}>
            Please visit this page on a mobile device
         </div>

         <div className={`${styles.mobile}`}>
            <div className={`${styles.center}`}>
               <Image src={checked} alt="checked" />
               <br />
               <br />
               <div>
                  <div
                     className={styles.h3_medium}
                     style={{ color: "#344054" }}
                  >
                     Check-in confirmed
                  </div>
                  </div>
            </div>
         </div>
      </Layout>
   );
};

export default OpenMail;
