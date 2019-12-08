import React from 'react';
import PropTypes from 'prop-types';

const Anchor = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Anchor;
