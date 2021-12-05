import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Head from 'next/head'
const Header = () => {
  const Json = {
    imgHW: "40px"
  }
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@700&display=swap" rel="stylesheet"/>
    </Head>
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/icon_dark_vercel.svg" height={Json.imgHW} width={Json.imgHW} alt="icon" />
        </Link>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.links}>
          <Link href="/login">
            <button className={styles.btn}>Login</button>
          </Link>
          <Link href="/signup">
            <button className={styles.btn}>Signup</button>
          </Link>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;