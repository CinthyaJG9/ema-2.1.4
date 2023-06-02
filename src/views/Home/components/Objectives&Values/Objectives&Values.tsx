import { FC } from 'react'

import { CLOUDINARY_UPLOAD_PRESET } from '@/libs'
import { Slider, Slide } from '@/components'
import { LayoutInfo, Paragraph } from '../'
import Image from 'next/image'

const Objectives: FC = () => {
  return (
    <LayoutInfo
      id='objetivos'
      name='Objectives'
      title='OBJETIVOS Y VALORES DEL PROYECTO'
    >
      <div className='flex items-center justify-center'>
        <div className='hidden items-center justify-center lg:flex'>
          <Image
            className='w-full object-cover'
            src={`${CLOUDINARY_UPLOAD_PRESET}/App/Objetivos.png`}
            alt='Next.js Logo'
            width={415}
            height={315}
            priority
          />
        </div>
      </div>
      <div className='grid h-full w-full place-items-center'>
        <Slider controls={true}>
          <Slide>
            <div className='flex h-full w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 px-5 shadow-md hover:bg-gray-100 dark:border-tertiary-light dark:bg-tertiary dark:hover:bg-tertiary-light'>
              <h5 className='mb-2 w-full text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                OBJETIVOS:
              </h5>
              <div className='w-full px-5'>
                <Paragraph title='-Conservar los valores fundamentales de la empresa.' />
                <Paragraph title='-Alcanzar mayor productividad.' />
                <Paragraph title='-Implantarse en el mercado.' />
                <Paragraph
                  title='-Entrar al mercado con software innovador, con margen de éxito
                  sostenible.'
                />
              </div>
            </div>
          </Slide>
          <Slide>
            <div className='flex h-full w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6  shadow-md hover:bg-gray-100 dark:border-tertiary-light dark:bg-tertiary dark:hover:bg-tertiary-light'>
              <div className='w-full px-5'>
                <Paragraph
                  title=' -Formar estrategias que permitan la consecución de los
                objetivos definidos para llevarlos a cabo.'
                />
                <Paragraph
                  title='-Sumar conocimientos nuevos para ser mejores programadores y
                personas.'
                />
              </div>
            </div>
          </Slide>
          <Slide>
            <div className='flex h-full w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100 dark:border-tertiary-light dark:bg-tertiary dark:hover:bg-tertiary-light'>
              <h5 className='mb-2 w-full text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                VALORES:
              </h5>
              <div className='flex flex-col items-center justify-center'>
                <div>
                  <Paragraph title='+Respeto.' />
                  <Paragraph title='+Responsabilidad.' />
                  <Paragraph title='+Honestidad.' />
                  <Paragraph title='+Compromiso.' />
                  <Paragraph title='+Trabajo en equipo.' />
                  <Paragraph title='+Innovación.' />
                </div>
              </div>
            </div>
          </Slide>
          <Slide>
            <div className='flex h-full w-full flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 px-5 shadow-md hover:bg-gray-100 dark:border-tertiary-light dark:bg-tertiary dark:hover:bg-tertiary-light'>
              <div className='flex flex-col items-center justify-center'>
                <div>
                  <Paragraph title='+Cargo de conciencia social.' />
                  <Paragraph title='+Perfeccionamiento continúo.' />
                  <Paragraph title='+Certeza.' />
                </div>
              </div>
            </div>
          </Slide>
        </Slider>
      </div>
    </LayoutInfo>
  )
}

export default Objectives
