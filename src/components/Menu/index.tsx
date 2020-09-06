import React from 'react'

import { Container } from './styles'

const Menu: React.FC = () => {
  return (
    <Container>
      <div className="header-navbar">
        <div className="logo-header">
          <span className="logo">Huriel Lopes</span>
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="">Portfólio</a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  )
}

export default Menu
