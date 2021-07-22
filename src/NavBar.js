import React from 'react';

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <h3>ConcertCare Task</h3>
      <div className='nav-bar-link'>
        <a
          href='https://github.com/Myilvaganan/concertcare-task'
          rel='noreferrer'
          target='_blank'
        >
          Github
        </a>
        <a
          href='https://myilvaganan.github.io/concertcare-task/'
          rel='noreferrer'
          target='_blank'
        >
          Deploy
        </a>
        <a
          href='https://myilvaganan.github.io/myilportfolio/'
          rel='noreferrer'
          target='_blank'
        >
          Portfolio
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
