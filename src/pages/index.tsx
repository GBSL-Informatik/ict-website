import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.scss";
import featuresStyles from "../components/Features/styles.module.scss";
import Head from "@docusaurus/Head";
import Feature, { FeatureProps } from "../components/Feature";


const QuickLinks: FeatureProps[] = [
  {
    name: "Support",
    icon: "mdi-account-supervisor",
    route: "/support",
    description: 'Supportadressen, Hilfe zur Selbsthilfe'
  },
];
  
const IndexPages: FeatureProps[] = [
  {
    name: "Geräte einrichten",
    icon: "mdi-cog",
    route: "/byod",
    description: 'Geräte einrichten, Geräte-fit-Check'
  },
  {
    name: "Schulkonto",
    icon: "mdi-microsoft-windows",
    route: "/schulkonto",
    description: 'Neu am GBSL, Schulkonto, Austritt'
  },
  {
    name: "Software & Medien",
    icon: "mdi-cellphone-link",
    route: "/anderesoftware",
    description: 'Office365, Adobe, exam.net'
  },
  {
   
    name: "Schulinfrastruktur",
    icon: "mdi-home-circle",
    route: "/infra",
    description: 'Unterrichtszimmer, Drucker'
  },
  {
    name: "Nützliches und Regeln",
    icon: "mdi-lightbulb-on-outline",
    route: "/tipps/",
    description: 'Update, Tools, Netiquette'
  },
  
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero index-page", styles.heroBanner)}>
      <img src="/img/logo.svg" className={styles.logo} />
      <div className={clsx('container', 'index-page-title')}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", styles.subTitle)}>{siteConfig.tagline}</p>
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
          <div className={clsx(featuresStyles.features, featuresStyles.max2, styles.center)}>
            {QuickLinks.map((feat, idx) => (
              <Feature {...feat} key={idx} />
            ))}
          </div>
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
