/* eslint-disable @next/next/link-passhref */
import styles from "../../Components/AuthComponent/signin.module.scss";
import Layout from "../../Components/Layout/layout";
import Image from "next/image";
import checked from "../../public/checked.png";
import Button from "../../Components/Button/Button";
import Link from "next/link";

const PasswordUpdate = () => {
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
                     All done
                  </div>
                  <p
                     className={styles.body_regular}
                     style={{ color: "#98A2B3" }}
                  >
                     You have successfully created a new password
                  </p>
               </div>
               <br />
               <Link href="/Authmode">
                  <a>
                     <Button>Login</Button>
                  </a>
               </Link>
            </div>
         </div>
      </Layout>
   );
};

export default PasswordUpdate;
