// Learn more theme shadowing https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { PageLayout, ConfigContext } from '@dotnetthailand/gatsby-theme-minimal-portfolio';

export default function ContactPage() {
  const config = useContext(ConfigContext);
  return (
    <PageLayout>
      <div className='container'>
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <h2>Contact</h2>
        <p>
          <h2>coming soon...</h2>
        </p>
      </div>
    </PageLayout>
  );
}
