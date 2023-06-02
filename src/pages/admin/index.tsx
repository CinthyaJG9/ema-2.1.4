import { useAuth } from '@/hooks';
import { getUserSession } from '@/libs';
import { getSession } from 'next-auth/react';
import type { GetServerSideProps, NextPage } from 'next';
import { AdminHome } from '@/views/Admin';
import { IMAdminRes } from '@/interfaces/Entities';
interface Props {
  user: IMAdminRes;
}

const App: NextPage<Props> = ({ user }) => {
  useAuth();
  return <AdminHome />;
};
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  const user = session ? getUserSession(session) : null;
  if (session && user && user.user.rol.id_rol === 1) {
    return {
      props: { user },
    };
  }
  return {
    props: {},
    redirect: {
      destination: '/',
      permanent: false,
  }
};
};
export default App;
