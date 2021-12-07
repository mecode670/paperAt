import styles from "../../styles/continue.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
const index = () => {
  const Json = {
    volume: "30px",
  };
   
 return (
    <>
      <Head>
        <title>Continue | PaperAt</title>
        <meta property="og:url" content="https://paperat.io" />
        <meta
          property="o
            g:type"
          content="website"
        />
        <meta property="og:title" content="Continue | PaperAt" />
        <meta property="og:site_name" content="Continue | PaperAt" />
        <meta
          property="og:description"
          content="Welcome friend, create a paper account right in your fingertips. "
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.totalDiv}>
          <div className={styles.btnDiv}>
          <Link href="/">
              <a>
            <button className={styles.btn}>
              <Image
                src="/google.svg"
                width={Json.volume}
                height={Json.volume}
              />
              Continue with Google
            </button>
            </a>
          </Link>
          </div>
          <div className={styles.btnDiv}>
          <Link href="/">
              <a>
            <button className={styles.btn}>
              <Image
                src="/facebook.svg"
                width={Json.volume}
                height={Json.volume}
              />
              Continue with Facebook
            </button>
            </a>
          </Link>
          </div>
          <div className={styles.btnDiv}>
          <Link href="/">
              <a>
            <button className={styles.btn}>
            <svg xmlns="http://www.w3.org/2000/svg" height={Json.volume} width={Json.volume} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              Continue with Email
            </button>
            </a>
          </Link>
          </div>
        </div>
    </>
  );
};

export default index;
