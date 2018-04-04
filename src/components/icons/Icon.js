
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const BaseIcon = styled.span`
  display: inline-block;
`;

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
      <BaseIcon className="icon">
        <i className={ className } />
      </BaseIcon>
    );
  }
}
