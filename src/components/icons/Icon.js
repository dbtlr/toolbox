
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const BaseIcon = styled.span``;

export default class Icon extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;

    return (
      <BaseIcon>
        <i className={ className } />
      </BaseIcon>
    );
  }
}
