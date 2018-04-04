import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Head } from 'react-static';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import { Container as BaseContainer } from '../elements';

const Container = BaseContainer.withComponent('main').extend``;

export default class Layout extends Component {
  static propTypes = {
    pageTitle: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
  };

  static defaultProps = {
    className: '',
    pageTitle: null,
  };

  render() {
    const { pageTitle, className, children } = this.props;

    return (
      <Fragment>
        <Head>
          <title>{ pageTitle }</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <PageHeader />
        <Container className={ className }>
          { children }
        </Container>
        <PageFooter />
      </Fragment>
    );
  }
}
