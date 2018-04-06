import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document from './src/Document';
import GravatarViewer from "./src/containers/GravatarViewer";

export default {
  siteRoot: process.env.SITE_ROOT || 'http://localhost:3000',
  getSiteData: () => ({
    title: 'Toolbox',
    siteRoot: process.env.SITE_ROOT || 'http://localhost:3000',
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS || null,
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/api-tester',
        component: 'src/containers/ApiTester',
      },
      {
        path: '/gravatar-viewer',
        component: 'src/containers/GravatarViewer',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  Document,
}
