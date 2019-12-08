import React from 'react';
import PropTypes from 'prop-types';

import { StyledSpan } from 'styles';

const Emoji = ({ emoji, ariaLabel, label }) => (
  <div>
    {`${label} `}
    <StyledSpan role="img" aria-label={ariaLabel}>
      {emoji}
    </StyledSpan>
  </div>
);

Emoji.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Emoji;
