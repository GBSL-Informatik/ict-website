import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.scss";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";

interface CardProps {
  name: string;
  icon: string;
  route: string;
}

const Card = ({ name, icon, route }: CardProps) => {
  return (
    <div className={styles.feature}>
      <Link to={route}>
        <a className={clsx("mdi", icon, styles.icon)}></a>
      </Link>
      <h2>
        <Link to={route}>{name}</Link>
      </h2>
    </div>
  );
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero index-page", styles.heroBanner)}>
      <img src="/img/logo.svg" className={styles.logo} />
      <div className="container index-page-title">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:description" content="Anleitungen, Tipps & Tricks" />
        <meta
          property="og:image"
          content="https://ict.gbsl.website/img/logo.png"
        />
      </Head>
      <Layout description="Anleitungen, Tipps & Tricks">
        <HomepageHeader />
        <main>
          <div className={styles.features}>
            <Card name="Geräte einrichten" icon="mdi-cog" route="/byod" />
            <Card
              name="Microsoft 365"
              icon="mdi-microsoft-windows"
              route="/microsoft365"
            />
            <Card
              name="Andere Software & Medien"
              icon="mdi-cellphone-link"
              route="/anderesoftware"
            />
            <Card
              name="Schulinfrastruktur"
              icon="mdi-home-circle"
              route="/infra"
            />
            <Card
              name="Sicherheit und Datenschutz"
              icon="mdi-security"
              route="/sicherheit"
            />
            <Card
              name="Internet verwenden"
              icon="mdi-earth"
              route="/internet"
            />
            <Card
              name="Textverarbeitung"
              icon="mdi-text-box-outline"
              route="/textverarbeitung"
            />
            <Card
              name="Präsentation"
              icon="mdi-presentation"
              route="/praesentation"
            />
            <Card
              name="Tabellenkalkulation"
              icon="mdi-table-large"
              route="/tabellenkalkulation"
            />
          </div>
        </main>
      </Layout>
    </>
  );
}
