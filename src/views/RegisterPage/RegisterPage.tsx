import Link from 'next/link'
import { useContext, FC, useEffect } from 'react'
import { useRouter } from 'next/router';
import { AcademicDataForm, LoadBar, PersonalDataForm } from './components'

import { useSendData, useCounter } from './hooks'
import { RegisterContext } from './context'

const RegisterPage: FC = () => {
  const router = useRouter();
  const { indexActive } = useContext(RegisterContext);
  const { isComplete } = useSendData();
  const { counter } = useCounter({ isComplete });

  useEffect(() => {
    if (isComplete) {
      const redirectTimeout = setTimeout(() => {
        router.push('/login');
      }, counter * 1000);

      return () => clearTimeout(redirectTimeout);
    }
  }, [isComplete, counter, router]);

  return (
    <div className='flex h-screen items-center justify-center bg-primary-light pt-36 dark:bg-tertiary'>
      <div className='flex h-full w-full flex-col items-center justify-evenly'>
        <LoadBar />
        <div className='my-8 w-1/2 md:w-3/12'>
          <p className='relative text-center text-gray-500 before:absolute before:-left-[60px] before:top-[50%] before:h-[1px] before:w-full before:max-w-[50px] before:bg-current after:absolute after:top-[50%] after:-right-[60px] after:h-[1px] after:w-full after:max-w-[50px] after:bg-current dark:text-gray-200 md:before:-left-[140px] md:before:max-w-[120px] md:after:-right-[140px] md:after:max-w-[120px]'>
            Para continuar, necesitamos los siguientes datos
          </p>
        </div>
        <div className={`mb-8 w-full ${indexActive !== 1 && 'hidden'}`}>
          <PersonalDataForm />
        </div>
        <div className={`mb-8 w-full ${indexActive !== 2 && 'hidden'}`}>
          <AcademicDataForm />
        </div>
        <div className={`mb-8 w-full ${indexActive !== 3 && 'hidden'}`}>
          <div className='flex flex-col items-center justify-center gap-4'>
            <div className='flex items-center gap-2'>
              <p className='text-2xl font-bold'>Completado</p>
              <p className='text-2xl font-bold'>
                Te redireccionaremos al login en {counter}
              </p>
            </div>
            <p className='text-center text-gray-500'>
              Te has registrado correctamente, ahora puedes iniciar sesión
            </p>
          </div>
        </div>
        <span className='text-gray-500 dark:text-gray-300'>
          ¿Ya tienes cuenta?{' '}
          <Link
            href='/login'
            className='text-gray-900 hover:underline hover:decoration-secondary hover:decoration-wavy dark:text-gray-100'
          >
            Inicia Sesión
          </Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterPage;
