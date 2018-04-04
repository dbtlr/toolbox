import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withSiteData, Link } from 'react-static';
import { BarsIcon } from '../icons/index';

const Header = styled.header`
  padding: 1rem 2rem;
  background-color: var(--text-color);
  color: var(--background-color);
  display: grid;
  grid-template-columns: 30px 1fr 30px;
  grid-template-areas:
    "blank title toggle";
  
  @media screen and (min-width: 780px) {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "title menu";
  }
  
  input {
    display: none;
  }
  
  input:checked ~ #page-header-menu {
    display: block;
  }
  
  a {
    color: var(--background-color);
    text-decoration: none;
    
    &:hover {
      color: var(--secondary-color);
    }
  }
}
  
`;

const SiteTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
  grid-area: title;
  
  @media screen and (min-width: 780px) {
    text-align: left;
  }
`;

const MenuToggle = styled.div`
  grid-area: toggle;
  cursor: pointer;
  
  
  @media screen and (min-width: 780px) {
    display: none;
  }
  
  path {
    fill: var(--background-color);
  }
  
  &.toggled path {
    fill: var(--secondary-color);
  }
`;

const Menu = styled.nav`
  grid-area: menu;
  display: none;
  
  &.opened {
    display: block;
    position: absolute;
    top: 4rem;
    right: 0;
    left: 0;
    background-color: var(--menu-background-color);
    color: var(--background-color);
    padding: 2rem;
    font-size: 1.5rem;
    
    a {
      text-align: center;
      display: block;
    }
  }
  
  @media screen and (min-width: 780px) {
    display: block;
    justify-self: end;
    align-self: center;
    
    a {
      margin: 0 1rem;
    }
  }
`;

class PageHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor() {
    super();

    this.state = {
      menuOpen: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const { title } = this.props;
    const { menuOpen } = this.state;

    return (
      <Header className="page-header">
        <SiteTitle><Link to="/">{ title }</Link></SiteTitle>
        <MenuToggle onClick={ this.toggleMenu } className={ menuOpen ? 'toggled' : '' }>
          <BarsIcon className="fa-2x" />
        </MenuToggle>
        <Menu className={ menuOpen ? 'opened' : 'closed' }>
          <Link to="/api-tester">API Tester</Link>
        </Menu>
      </Header>
    );
  }
}

export default withSiteData(PageHeader);
