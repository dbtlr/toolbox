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
  
  li {
    margin: 0.5rem 0;
    padding: 0;
    
    a {
      text-decoration: none;
    }
  }
`;

export default class Home extends Component {
  render() {
    return (
      <Layout pageTitle="Toolbox" className="centered">
        <WrenchIcon className="fa-4x" />
        <Title>Toolbox</Title>
        <List>
          <li><Link to="/api-tester">API Tester</Link></li>
          <li><Link to="/gravatar-viewer">Gravatar Viewer</Link></li>
        </List>
      </Layout>
    );
  }
}
