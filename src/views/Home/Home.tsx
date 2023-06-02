import { FC } from 'react'
import {
  Banner,
  Philosophy,
  Mision,
  Objectives,
  Footer,
  Layout
} from './components'
import { HomeProvider } from './context'

const Home: FC = () => {
  return (
    <>
      <HomeProvider>
        <Layout
          title='EMA'
          description='EMA es una empresa desarrollada por alumnos para ayudar a otros estudiantes con su aprendizaje escolar'
        >
          <main
            className='relative flex min-h-screen flex-col  bg-primary-light px-12 py-8 dark:bg-tertiary '
            id={'home'}
          >
            <Banner />
            <Philosophy />
            <Mision />
            <Objectives />
          </main>
          <Footer />
        </Layout>
      </HomeProvider>
    </>
  )
}

export default Home
