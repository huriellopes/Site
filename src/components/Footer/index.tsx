import React from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

import { Container } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <div className="footer">
        <div className="content">
          <p>&copy; Todos os Direitos Reservados</p>
        </div>
        <div className="icones">
          <a
            href="http://github.com/huriellopes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub size={30} color="#FEFEFF" />
          </a>
          <a
            href="http://www.linkedin.com/in/huriellopes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin size={30} color="#FEFEFF" />
          </a>
        </div>
      </div>
    </Container>
  )
}

export default Footer
