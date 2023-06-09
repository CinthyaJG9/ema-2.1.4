import axios from 'axios';
import { ICRol } from '@/interfaces';
import { BASE_URL_API } from '@/libs';
import { axiosSuccess, axiosError } from '@/utils';
import { ResponseRol, AxiosResponsePPD, Message } from '@/typings';

export const RolService = {
  getAll: async (): Promise<ResponseRol> => {
    try {
      const ResRol = await axios.get<ICRol[]>(`${BASE_URL_API}/Rol`);
      return axiosSuccess(ResRol, 'RolService');
    } catch (error: any) {
      return axiosError(error, 'RolService.');
    }
  },
  getOne: async (id: number): Promise<ResponseRol> => {
    try {
      const ResRol = await axios.get<ICRol[]>(`${BASE_URL_API}/Rol/${id}`);
      return axiosSuccess(ResRol, 'RolService');
    } catch (error: any) {
      return axiosError(error, 'RolService.');
    }
  },
  create: async (Rol: ICRol): Promise<AxiosResponsePPD> => {
    try {
      const ResRol = await axios.post<Message>(`${BASE_URL_API}/Rol`,
       Rol);
      return axiosSuccess(ResRol, 'RolService');
    } catch (error: any) {
      return axiosError(error, 'RolService.');
    }
  },
  update: async (Rol: ICRol): Promise<AxiosResponsePPD> => {
    try {
      const ResRol = await axios.put<Message>(`${BASE_URL_API}/Rol`, Rol);
      return axiosSuccess(ResRol, 'RolService');
    } catch (error: any) {
      return axiosError(error, 'RolService.');
    }
  },
  delete: async (Rol: ICRol): Promise<AxiosResponsePPD> => {
    try {
      const ResRol = await axios.delete<Message>(`${BASE_URL_API}/Rol`, {
        data: Rol,
      });
      return axiosSuccess(ResRol, 'RolService');
    } catch (error: any) {
      return axiosError(error, 'RolService.');
    }
  },
};
