import { configureStore } from '@reduxjs/toolkit'
import { studentReducer, adminReducer, themeReducer } from './states'
import { IMEstudianteRes, IMAdminRes } from '@/interfaces'

export interface AppStore {
  student: IMEstudianteRes
  admin: IMAdminRes
  themeMode: boolean
}

export default configureStore({
  reducer: {
    themeMode: themeReducer,
    student: studentReducer,
    admin: adminReducer
  }
})
