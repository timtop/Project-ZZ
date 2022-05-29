import styles from "../../Components/AuthComponent/signin.module.scss";
import Layout from "../../Components/Layout/layout";
import Image from "next/image";
import checkmail from "../../public/open_mail.png";
import Button from "../../Components/Button/Button";
import BackRouter from "../../Components/BackRouter/BackRouter";

const OpenMail = () => {
   return (
      <Layout>
         <BackRouter route={"/Authmode/ResetPassword"}/>
         <div className={styles.desktop}>
            Please visit this page on a mobile device
         </div>

         <div className={`${styles.mobile}`}>
            <div className={`${styles.center}`}>
               <Image src={checkmail} alt="checkmail" />
               <br />
               <br />
               <div>
                  <div
                     className={styles.h3_medium}
                     style={{ color: "#344054" }}
                  >
                     Check your email
                  </div>
                  <p
                     className={styles.body_regular}
                     style={{ color: "#98A2B3" }}
                  >
                     We have sent a password reset instruction to your email
                  </p>
               </div>
               <br />
               <Button>
                  <a href="mailto:">Open email app</a>
               </Button>
            </div>
         </div>
      </Layout>
   );
};

export default OpenMail;
