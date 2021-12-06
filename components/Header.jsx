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
    <link href="https://fonts.googleapis.com/css2?family=Readex+Pro&display=swap" rel="stylesheet"/>
    </Head>
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
          <Image src="/icon_dark_vercel.svg" height={Json.imgHW} width={Json.imgHW} alt="icon" />
          </a>
        </Link>
      </div>
      <nav className={styles.navigation}>
        <div className={styles.links}>
          <Link href="/login">
            <a>
            <button className={styles.btn}>Login</button>
            </a>
          </Link>
          <Link href="/signup">
            <a>
            <button className={styles.btn}>Signup</button>
            </a>
          </Link>
        </div>
      </nav>
    </header>
    </>
  );
};

export default Header;