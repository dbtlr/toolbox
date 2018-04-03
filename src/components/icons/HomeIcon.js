
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fontawesome from '@fortawesome/fontawesome';
import { faHome } from '@fortawesome/fontawesome-free-solid';

import Icon from './Icon';

fontawesome.library.add( faHome );

export default class HomeIcon extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;
    return (
      <Icon className={`fas fa-home${ className ? ' ' + className : '' }`} />
    );
  }
}
