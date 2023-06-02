import { LayoutStudent } from '@/components/Layouts';
import StudentSchedulePage from '@/views/Student/StudentSchedulePage';

import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { getUserSession } from '@/libs';
import { useAuth } from '@/hooks';
import { IMEstudianteRes } from '@/interfaces/Entities';

interface Props {
  user: IMEstudianteRes;
}
const App: NextPage<Props> = ({ user }) => {
  useAuth();
  return (
    <LayoutStudent title='Horario' description='Horario'>
      <StudentSchedulePage />
    </LayoutStudent>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  const user = session ? getUserSession(session) : null;
  if (session && user && user.user.rol.id_rol === 2) {
    return {
      props: { user },
    };
  }
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
};


export default App;
