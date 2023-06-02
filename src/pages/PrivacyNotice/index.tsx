import { PrivacyNoticePage } from '@/views/PrivacyNotice';

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
  return <PrivacyNoticePage />;
};

/*export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  const user = session ? getUserSession(session) : { username: "guest" };
  return {
    props: { user },
  };
};*/
export default App;
