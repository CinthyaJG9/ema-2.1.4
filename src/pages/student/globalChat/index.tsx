import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';

import { LayoutStudent } from '@/components/Layouts';
import { GlobalChat } from '@/views/Student';
import { IMEstudianteRes } from '@/interfaces/Entities';

import { getUserSession } from '@/libs';

import { useAuth } from '@/hooks';

interface Props {
  user: IMEstudianteRes;
}

const App: NextPage<Props> = ({ user }) => {
  useAuth();
  return (
    <LayoutStudent title='Chat' description='Este es el chatbot de emma'>
      <GlobalChat />
    </LayoutStudent>
  );
};

/*export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  const user = session ? getUserSession(session) : null;

  if (session && user && user.user.rol.id_rol === 2) {
    return {
      props: { user },
    };
  }
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};*/

export default App;
