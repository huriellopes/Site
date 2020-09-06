import React from 'react'

import { Container } from './styles'

const About: React.FC = () => {
  return (
    <Container>
      <h2 className="title">Sobre</h2>
      <section className="content">
        <p>
          Me chamo Huriel C. Lopes, formado em Análise e Desenvolvimento de
          sistemas, possuo aproximadamente 4 anos de experiência na área de
          desenvolvimento com a linguagem PHP e Laravel Framework, prezando
          sempre pela segurança e um bom código limpo. Entusiasta no mundo do
          Javascript com as tecnologias Node.Js, React.Js e React Native, sempre
          prezando pelas boas práticas de desenvolvimento.
        </p>
      </section>
    </Container>
  )
}

export default About
