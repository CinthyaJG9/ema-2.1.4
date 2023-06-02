import { FC } from 'react'

import { InfoImg, InfoText, LayoutInfo } from '../Layout'

const Philosophy: FC = () => {
  return (
    <LayoutInfo
      id='filosofia'
      name='Philosophy'
      title='FILOSOFÍA Y PROPÓSITO DEL PROYECTO'
    >
      <InfoImg img='Filosofia.png' alt='Foto sobre la filosia de la empresa' />

      <InfoText
        title='FILOSOFÍA:'
        text='Creemos que cualquier persona que 
        tenga interés por estudiar, puede aprender 
        sin la necesidad de un profesor.'
      />

      <InfoText
        title='PROPÓSITO:'
        text='Ofrecer software e innovar la forma en que aprendemos.'
      />

      <InfoImg
        img='Proposito.png'
        alt='Foto sobre el proposito de la empresa'
      />
    </LayoutInfo>
  )
}

export default Philosophy
