import React, { Component } from 'react';

export default class Document extends Component {
  render () {
    const {
      Html,
      Head,
      Body,
      children,
      renderMeta,
      siteData: {
        googleAnalyticsId
      }
    } = this.props;

    let trackingCodeSrc = '';
    let trackingCodeScript = '';

    if (googleAnalyticsId) {
      trackingCodeSrc = (
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />
      );

      trackingCodeScript = (
        <script dangerouslySetInnerHTML={{
          __html: 'window.dataLayer = window.dataLayer || [];' +
          'function gtag(){dataLayer.push(arguments)}' +
          'gtag(\'js\', new Date());' +
          `gtag('config', '${googleAnalyticsId}');`
        }}/>
      );
    }

    return (
      <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
              integrity="sha256-oSrCnRYXvHG31SBifqP2PM1uje7SJUyX0nTwO2RJV54=" crossOrigin="anonymous"/>
        { renderMeta.styleTags }
        { trackingCodeSrc }
        { trackingCodeScript }
      </Head>
      <Body>{ children }</Body>
      </Html>
    );
  }
}
