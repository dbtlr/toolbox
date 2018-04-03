import React, { Component } from 'react';
import { Link } from 'react-static';
import styled from 'styled-components';
import Layout from '../components/Layout/index';
import { WrenchIcon } from '../components/icons';
import { Title } from '../components/elements';

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default class Home extends Component {
  render() {
    return (
      <Layout pageTitle="Toolbox" className="centered">
        <WrenchIcon className="fa-4x" />
        <Title>Toolbox</Title>
        <List>
          <li><Link to="/cors-tester">CORS Tester</Link></li>
        </List>
      </Layout>
    );
  }
}
