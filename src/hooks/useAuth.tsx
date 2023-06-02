import { useDispatch, useSelector } from 'react-redux'
import { useSession } from 'next-auth/react'
import { AppStore } from '@/redux/store'
import { createStudent } from '@/redux/states/student.state'
import { createAdmin } from '@/redux/states/admin.state'
import { IMAdminRes, IMEstudianteRes } from '@/interfaces'
import { useEffect } from 'react'

interface IUser {
  data: IMAdminRes | IMEstudianteRes
  exp: number
  iat: number
  isNewUser: boolean
  jti: string
  sub: string
}
interface ISession {
  expires: string
  user: IUser
}

const useAuth = () => {
  const dispatch = useDispatch()
  const { data } = useSession()
  const session = data as ISession

  useEffect(() => {
    if (session) {
      const { data } = session.user

      const id_rol = data.user.rol.id_rol
      if (id_rol === 1) {
        dispatch(createAdmin(data as IMAdminRes))
      }
      if (id_rol === 2) {
        dispatch(createStudent(data as IMEstudianteRes))
      }
    }
  }, [session])

  const studentState = useSelector((state: AppStore) => state.student)
  const adminState = useSelector((state: AppStore) => state.admin)
  const { isLogued } = studentState || adminState

  return { studentState, adminState, isLogued }
}

export default useAuth