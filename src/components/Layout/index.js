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
          <link rel="icon" type="image/png" href="/favicon.png" />
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
