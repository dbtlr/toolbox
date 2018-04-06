
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fontawesome from '@fortawesome/fontawesome';
import { faExclamationTriangle } from '@fortawesome/fontawesome-free-solid';

import Icon from './Icon';

fontawesome.library.add( faExclamationTriangle );

export default class ErrorIcon extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;
    return (
      <Icon className={`fas fa-exclamation-triangle${ className ? ' ' + className : '' }`} />
    );
  }
}
