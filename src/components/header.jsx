import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { title, subTitle } = props;
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{title}</h1>
        <h2 className="header__subtitle">{subTitle}</h2>
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: '',
  subTitle: '',
};

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default Header;
