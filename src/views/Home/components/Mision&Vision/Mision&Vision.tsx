import { FC } from 'react'
import { InfoImg, InfoText, LayoutInfo } from '../Layout'

const Mision: FC = () => {
  return (
    <LayoutInfo id='mision' name='Mission' title='MISION Y VISIÓN DEL PROYECTO'>
      <InfoImg img='Mision.png' alt='Foto sobre la mision de la empresa' />

      <InfoText
        title='MISIÓN:'
        text='Desarrollar software que cumpla con 
        los requerimientos de los usuarios, fortaleciendo 
        al sector educativo, organizar contenido educativo 
        y brindarlo de manera eficaz para cualquier usuario.'
      />
      <InfoText
        title='VISIÓN:'
        text='Posicionarnos como empresa líder de 
        desarrollo de software, apoyar al sector 
        educativo innovando la forma en que aprendemos.'
      />
      <InfoImg
        img='Vision.png'
        alt='Foto sobre la vision de la empresa'
        width={255}
        height={315}
      />
    </LayoutInfo>
  )
}

export default Mision
