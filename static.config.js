import { ServerStyleSheet } from 'styled-components';
import Document from './src/Document';
import CorsTester from "./src/containers/CorsTester";

export default {
  siteRoot: process.env.SITE_ROOT || 'http://localhost:3000',
  getSiteData: () => ({
    title: 'Toolbox',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/cors-tester',
        component: 'src/containers/CorsTester',
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
