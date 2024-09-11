import React from 'react';
import Head from '@docusaurus/Head';
import siteConfig from '@generated/docusaurus.config';

// Default implementation, that you can customize
export default function Root({children}: { children: JSX.Element }) {
  return (<>
  
      <Head>
                <meta property="og:description" content={siteConfig.tagline} />
                <meta
                    property="og:image"
                    content={`${siteConfig.url || ''}/img/logo.png`}
                />
            </Head>
    {children}
    </>);
}