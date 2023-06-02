import { FC, useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Developers: FC = () => {
  const el = useRef<any>(null)
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    const options = {
      strings: [
        'Astudillo Pérez Edwin Uriel',
        'Freyre Valderrama Aarón',
        'García Acosta Sergio Adrian',
        'Gómez Santiago Eduardo',
        'Guzmán Gutiérrez Alan Joseph',
        'Jiménez García Cinthya Fernanda'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    }
    typed.current = new Typed(el?.current, options)

    return () => {
      typed?.current?.destroy()
    }
  }, [])

  return (
    <>
      <div className='flex flex-col gap-8 md:flex-row md:items-center md:gap-20'>
        <div>
          <p className='block font-mono '>
            Desarolladores: <span ref={el}></span>
          </p>
        </div>
      </div>
    </>
  )
}
export default Developers
