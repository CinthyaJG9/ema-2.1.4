import type { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'

import { LayoutStudent } from '@/components/Layouts'
import { StudentPage } from '@/views/Student'
import { ChatProvider } from '@/views/Chat'
import { IMEstudianteRes } from '@/interfaces/Entities'

import { getUserSession } from '@/libs'

import { useAuth } from '@/hooks'
import { UserT } from '@/typings'

interface Props {
  user: IMEstudianteRes
}

const App: NextPage<Props> = ({ user }) => {
  useAuth()
  return (
    <LayoutStudent title='Chat' description='Este es el chatbot de emma'>
      <ChatProvider>
        <StudentPage />
      </ChatProvider>
    </LayoutStudent>
  )
}

 export const getServerSideProps: GetServerSideProps = async ({ req }) => {
   const session = await getSession({ req });
 const user = session ? getUserSession(session) : null;
 if (session && user?.user.rol.id_rol === 2) {
   return {
     props: { user },
   };
 } else {
   return {
     redirect: {
       destination: '/',
       permanent: false,
     },
   };
 }
 }

export default App
