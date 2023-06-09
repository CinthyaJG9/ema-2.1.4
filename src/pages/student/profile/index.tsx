import { LayoutStudent } from '@/components/Layouts';
import { EditProfile } from '@/views/EditProfile';

import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { getUserSession } from '@/libs';
import { useAuth } from '@/hooks';
import { ICGenero, IMEstudianteRes } from '@/interfaces/Entities';
import { GeneroService } from '@/services';
interface Props {
  user: IMEstudianteRes;
  dataGenero: ICGenero[];
}
const App: NextPage<Props> = ({ user, dataGenero }) => {
  useAuth();
  return (
    <LayoutStudent title='Profile' description='Profile of Student '>
      <EditProfile dataGenero={dataGenero} />
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
