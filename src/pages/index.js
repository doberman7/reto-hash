import Link from "next/link";
import Head from "next/head";
import Seconds from "./Seconds/Seconds.js";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import "antd/dist/antd.css";

function HomePage() {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            (This is a sample website - you’ll be building a site like this on{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <Seconds />
      </Layout>
    </>
  );
}

export default HomePage;
