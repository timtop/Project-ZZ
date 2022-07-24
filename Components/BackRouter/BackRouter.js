/* eslint-disable @next/next/link-passhref */
import React from "react";
import styles from "./backRouter.module.scss";
import Link from "next/link";
import Image from "next/image";

const BackRouter = ({ route }) => {
   return (
      <div className={`${styles.container}`}>
         <Link href={route}>
            <Image
               src="/back.png"
               alt="toggle show password"
               width={24.1}
               height={24.1}
            />
         </Link>
      </div>
   );
};

export default BackRouter;
