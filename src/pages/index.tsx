import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
import featuresStyles from '../components/Features/styles.module.scss';
import Head from '@docusaurus/Head';
import Feature, { FeatureProps } from '../components/Feature';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { translate } from '@docusaurus/Translate';

const QuickLinks: FeatureProps[] = [
    {
        name: translate({
            message: 'Support',
            id: 'main.link.support.text'
        }),
        icon: 'mdi-account-supervisor',
        route: '/support',
        description: translate({
            message: 'Supportadressen, Hilfe zur Selbsthilfe',
            id: 'main.link.support.description'
        })
    }
];

const IndexPages: FeatureProps[] = [
    {
        name: translate({
            message: 'Geräte einrichten',
            id: 'main.link.byod.text'
        }),
        icon: 'mdi-cog',
        route: '/byod',
        description: translate({
            message: 'Geräte einrichten, Geräte-fit-Check',
            id: 'main.link.byod.description'
        })
    },
    {
        name: translate({
            message: 'Schulkonto',
            id: 'main.link.schulkonto.text'
        }),
        icon: 'mdi-microsoft-windows',
        route: '/schulkonto',
        description: translate({
            message: 'Neu am GBSL, Schulkonto, Austritt',
            id: 'main.link.schulkonto.description'
        })
    },
    {
        name: translate({
            message: 'Software & Medien',
            id: 'main.link.anderesoftware.text'
        }),
        icon: 'mdi-cellphone-link',
        route: '/anderesoftware',
        description: translate({
            message: 'Office365, Adobe, exam.net',
            id: 'main.link.anderesoftware.description'
        })
    },
    {
        name: translate({
            message: 'Schulinfrastruktur',
            id: 'main.link.infra.text'
        }),
        icon: 'mdi-home-circle',
        route: '/infra',
        description: translate({
            message: 'Unterrichtszimmer, Drucker',
            id: 'main.link.infra.description'
        })
    },
    {
        name: translate({
            message: 'Nützliches und Regeln',
            id: 'main.link.tipps.text'
        }),
        icon: 'mdi-lightbulb-on-outline',
        route: '/tipps/',
        description: translate({
            message: 'Update, Tools, Netiquette',
            id: 'main.link.tipps.description'
        })
    }
];

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    const imgSrc = useBaseUrl('/img/logo.png');
    return (
        <header className={clsx('hero index-page', styles.heroBanner)}>
            <img src={imgSrc} className={styles.logo} />
            <div className={clsx('container', 'index-page-title')}>
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className={clsx('hero__subtitle', styles.subTitle)}>{siteConfig.tagline}</p>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <>
            <Head>
                <meta property="og:description" content="Anleitungen, Tipps & Tricks" />
                <meta property="og:image" content="https://ict.gbsl.website/img/logo.png" />
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
