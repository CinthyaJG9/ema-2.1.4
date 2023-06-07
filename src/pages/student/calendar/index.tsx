import { getUserSession } from '@/libs';
import { getSession } from 'next-auth/react';
import { useAuth } from '@/hooks';

import type { GetServerSideProps, NextPage } from 'next';
import { IMEstudianteRes } from '@/interfaces/Entities';

import { LayoutStudent } from '@/components/Layouts';
import Iframe from 'react-iframe';
import axios from 'axios';

interface Props {
  user: IMEstudianteRes;
  endpoint: string;
}

const App: NextPage<Props> = ({ user, endpoint }) => {
  const { studentState } = useAuth();
  console.log(studentState?.user.correo_user);
  
  return (
    <LayoutStudent title='Calendario' description='Calendario'>
      <Iframe
        url={`${endpoint}${'?' + studentState?.user.correo_user ?? 'auth/'}`}
        className='h-[89vh] w-full'
      />
    </LayoutStudent>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
const student = session ? getUserSession(session) : null;
  try {
    if (session && student && student.user.rol.id_rol === 2) {
      return {
        props: { student, user: student, endpoint: process.env.NEXT_PUBLIC_ENDPOINT_CALENDAR },
      };
    }
    await axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT_CALENDAR}${student?.user.correo_user ?? 'auth/'}`  
    );
  } catch (e) {
    console.log(e);
  }
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

export default App;
