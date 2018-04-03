
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fontawesome from '@fortawesome/fontawesome';
import { faWrench } from '@fortawesome/fontawesome-free-solid';

import Icon from './Icon';

fontawesome.library.add( faWrench );

export default class WrenchIcon extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;
    return (
      <Icon className={`fas fa-wrench${ className ? ' ' + className : '' }`} />
    );
  }
}
