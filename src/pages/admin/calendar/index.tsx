import { getUserSession } from '@/libs';
import { getSession } from 'next-auth/react';
import { useAuth } from '@/hooks';

import type { GetServerSideProps, NextPage } from 'next';
import { IMAdminRes } from '@/interfaces';

import { LayoutStudent } from '@/components';
import Iframe from 'react-iframe';
import axios from 'axios';

interface Props {
  user: IMAdminRes;
  endpoint: string;
}

const App: NextPage<Props> = ({ user, endpoint }) => {
  const { adminState } = useAuth();

  return (
    <LayoutStudent title='Calendario' description='Calendario'>
      <Iframe
        url={`${endpoint}${'?' + adminState?.user.correo_user ?? 'auth/'}`}
        className='h-[89vh] w-full'
      />
    </LayoutStudent>
  );
};

/*export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  //const admin = getUserSession(session);
  const admin = session ? getUserSession(session) : null;
  try {
    if (session && admin && admin.user.rol.id_rol === 2) {
      return {
        props: { admin },
      };
    }
    await axios.get(
      `${process.env.ENDPOINT_CALENDAR}${admin?.user.correo_user ?? 'auth/'}`
    );
  } catch (e) {
    console.log(e);
  }
  return {
    props: { user: admin, endpoint: process.env.ENDPOINT_CALENDAR },
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};
*/
export default App;
