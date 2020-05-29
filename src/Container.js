import React from 'react';
import { PropTypes } from 'prop-types';


class Container extends React.Component {

  render() {

    let classNames = ['container'];

    if( this.props.centered ) {
      classNames.push('mx-auto');
    }

    if( this.props.maxWidth ) {
      classNames.push(`max-w-${this.props.maxWidth}`);
    }

    return (
      <div className={classNames.join(' ')}>
        { this.props.children }
      </div>
    )
  }
}

Container.propTypes = {
  centered: PropTypes.bool
};

Container.defaultProps = {
  children: '',
  centered: true
};

export default Container;