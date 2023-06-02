import { FC, useEffect, useRef } from 'react'
import Image from 'next/image'

import { useNearScreen } from '@/hooks'
import { useHomeContext } from '../../hooks'

import { RiCheckboxBlankCircleFill, RiPlayFill } from 'react-icons/ri'

import { CLOUDINARY_UPLOAD_PRESET } from '@/libs'

const Banner: FC = () => {
  const refBanner = useRef(null)
  const { setIsInicioNearScreen } = useHomeContext()

  const { isNearScreen } = useNearScreen({
    externalRef: refBanner,
    once: false
  })

  useEffect(() => {
    setIsInicioNearScreen(isNearScreen)
  }, [isNearScreen])

  return (
    <section
      className='grid h-screen grid-cols-1 md:px-8 lg:grid-cols-2'
      ref={refBanner}
    >
      <div className='flex content-center'>
        <div className='flex items-center justify-center p-8 md:col-span-5 xl:p-16'>
          <div className='flex flex-col gap-8'>
            <h1 className='text-center text-6xl font-bold leading-[4.5rem] dark:text-white sm:text-7xl md:text-8xl '>
              Educational Material
              <span className='relative mt-3 inline-block border-8 border-secondary px-6 py-2 text-secondary'>
                Assistant
                <RiCheckboxBlankCircleFill className='dark:text-darkmode absolute -left-5 -top-5 box-content rounded-full bg-secondary p-2 text-base text-white' />
                <RiCheckboxBlankCircleFill className='dark:text-darkmode absolute -right-5 -top-5 box-content rounded-full bg-secondary p-2 text-base text-white' />
                <RiCheckboxBlankCircleFill className='dark:text-darkmode absolute -bottom-5 -right-5 box-content rounded-full bg-secondary p-2 text-base text-white' />
                <RiCheckboxBlankCircleFill className='dark:text-darkmode absolute -bottom-5 -left-5 box-content rounded-full bg-secondary p-2 text-base text-white' />
              </span>
            </h1>
            <p className='text-justify text-xl leading-[2.5rem] text-gray-500 dark:text-gray-300 md:text-xl '>
              <span className='font-bold'>
                “Impulsando el aprendizaje con tecnología”
              </span>{' '}
              Educational Material Assistant es un asistente que pretende apoyar
              con la organización y el aprendizaje de manera visual.
            </p>
            <div className='flex flex-col items-center gap-4 md:flex-row'>
  <a href='https://www.youtube.com/watch?v=o-Bal9Zf28M' target='_blank' className='flex w-full items-center justify-start gap-4 rounded-xl px-8 py-2 text-left text-xl xl:w-auto'>
    <RiPlayFill className='box-content rounded-full bg-gray-300 p-4 text-secondary' />{' '}
    ¿Eres nuevo en EMA? <br /> mira este video introductorio
  </a>
</div>

          </div>
        </div>
      </div>
      <div className='hidden items-center lg:flex'>
        <Image
          className='w-full object-cover'
          src={`${CLOUDINARY_UPLOAD_PRESET}/App/Banner.png`}
          alt='Next.js Logo'
          width={769}
          height={705}
          priority
        />
      </div>
    </section>
  )
}

export default Banner
