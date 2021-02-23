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
            El reto consiste en usar REACT y ​NEXT.JS para generar una interfaz
            CRUD (Create, Read, Update, Delete) para el recurso cronjobs
          </p>
        </section>
        <Seconds />
      </Layout>
    </>
  );
}

export default HomePage;
