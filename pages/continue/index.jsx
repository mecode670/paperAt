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
              <Image
                src="/apple.svg"
                width={Json.volume}
                height={Json.volume}
              />
              Continue with Apple
            </button>
            </a>
          </Link>
          </div>
        </div>
    </>
  );
};

export default index;
