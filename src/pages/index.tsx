import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.scss";
import featuresStyles from "../components/Features/styles.module.scss";
import Head from "@docusaurus/Head";
import Feature, { FeatureProps } from "../components/Feature";

const IndexPages: FeatureProps[] = [
  {
    name: "Geräte einrichten",
    icon: "mdi-cog",
    route: "/byod",
  },
  {
    name: "Microsoft 365",
    icon: "mdi-microsoft-windows",
    route: "/microsoft365",
  },
  {
    name: "Andere Software & Medien",
    icon: "mdi-cellphone-link",
    route: "/anderesoftware",
  },
  {
    name: "Schulinfrastruktur",
    icon: "mdi-home-circle",
    route: "/infra",
  },
  {
    name: "Sicherheit und Datenschutz",
    icon: "mdi-security",
    route: "/sicherheit",
  },
  {
    name: "Internet verwenden",
    icon: "mdi-earth",
    route: "/internet",
  },
  {
    name: "Textverarbeitung",
    icon: "mdi-text-box-outline",
    route: "/textverarbeitung",
  },
  {
    name: "Präsentation",
    icon: "mdi-presentation",
    route: "/praesentation",
  },
  {
    name: "Tabellenkalkulation",
    icon: "mdi-table-large",
    route: "/tabellenkalkulation",
  },
];

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
          <div className={featuresStyles.features}>
            {IndexPages.map((feat, idx) => (
              <Feature {...feat} key={idx} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}
