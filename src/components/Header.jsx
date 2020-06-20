import React from 'react';
import st from '../css/Header.module.less';

const Header = () => {
  return (
    <header className={st.header}>
      <img className={st.logo} src="https://cdn.dribbble.com/users/182238/screenshots/2383317/lion2.jpg" alt="" />
    </header>
  )
}

export default Header;