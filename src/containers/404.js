import React, { Component } from 'react';
import Layout from '../components/Layout/index';
import { BlindIcon } from '../components/icons';
import { Title, Article } from '../components/elements';

export default class Home extends Component {
  render() {
    return (
      <Layout pageTitle="Page Not Found" className="centered">
        <BlindIcon className="fa-6x" />
        <Title>You Seem Lost</Title>
        <Article>
          <p>The page you are looking for could not be found.</p>
        </Article>
      </Layout>
    );
  }
}
