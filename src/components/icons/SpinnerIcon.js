
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fontawesome from '@fortawesome/fontawesome';
import { faSpinner } from '@fortawesome/fontawesome-free-solid';

import Icon from './Icon';

fontawesome.library.add( faSpinner );

export default class SpinnerIcon extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className } = this.props;
    return (
      <Icon className={`fas fa-spinner fa-spin${ className ? ' ' + className : '' }`} />
    );
  }
}
