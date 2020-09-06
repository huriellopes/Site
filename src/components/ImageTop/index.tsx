import React from 'react'

import { Container } from './ImageTop'
import setaImg from '../../assets/seta.svg'
import Menu from '../Menu'

const ImageTop: React.FC = () => {
  return (
    <Container>
      <Menu />
      <div className="content"></div>
    </Container>
  )
}

export default ImageTop
