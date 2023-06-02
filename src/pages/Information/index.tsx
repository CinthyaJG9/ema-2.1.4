import { LayoutStudent } from '@/components/Layouts';
import { InformationHome } from '@/views/Information';

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
    <LayoutStudent title='Information' description='Information'>
      <InformationHome />
    </LayoutStudent>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  const user = session ? getUserSession(session) : null;
  return {
    props: { user },
  };
};

export default App;
