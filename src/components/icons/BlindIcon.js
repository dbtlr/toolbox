
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fontawesome from '@fortawesome/fontawesome';
import { faBlind } from '@fortawesome/fontawesome-free-solid';

import Icon from './Icon';

fontawesome.library.add( faBlind );

export default class BlindIcon extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;
    return (
      <Icon className={`fas fa-blind${ className ? ' ' + className : '' }`} />
    );
  }
}
