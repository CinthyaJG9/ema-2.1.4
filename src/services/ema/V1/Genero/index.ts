import axios from 'axios';
import { BASE_URL_API } from '@/libs';
import { ICGenero } from '@/interfaces';
import { axiosError, axiosSuccess } from '@/utils';
import { ResponseGenero, AxiosResponsePPD, Message } from '@/typings';

export const GeneroService = {
  getAll: async (): Promise<ResponseGenero> => {
    try {
      const ResponseGen = await axios.get<ICGenero[]>(`${BASE_URL_API}/Genero`);

      return axiosSuccess(ResponseGen, 'GeneroService.getAll');
    } catch (error: any) {
      return axiosError(error, 'GeneroService.getAll');
    }
  },
  getOneById: async (id: number): Promise<ResponseGenero> => {
    try {
      const ResponseGenero = await axios.get<ICGenero[]>(
        `${BASE_URL_API}/Genero/${id}`
      );
      return axiosSuccess(ResponseGenero, 'GeneroService.getAll');
    } catch (error: any) {
      return axiosError(error, 'GeneroService.getOneById');
    }
  },

  getOneByTipo: async (tipo: string): Promise<ResponseGenero> => {
    try {
      const ResponseGen = await axios.get(`${BASE_URL_API}/Genero/${tipo}`);
      return axiosSuccess(ResponseGen, 'GeneroService.getOneByTipo');
    } catch (error: any) {
      return axiosError(error, 'GeneroService.getOneByTipo');
    }
  },
  create: async (Genero: ICGenero): Promise<AxiosResponsePPD> => {
    try {
      const ResponseGen = await axios.post<Message>(
        `${BASE_URL_API}/Genero`,
        Genero
      );
      console.log({ ResponseGen });

      return axiosSuccess(ResponseGen, 'GeneroService.create');
    } catch (error: any) {
      return axiosError(error, 'GeneroService');
    }
  },
  update: async (Genero: ICGenero): Promise<AxiosResponsePPD> => {
    try {
      const ResponseGen = await axios.put<Message>(
        `${BASE_URL_API}/Genero`,
        Genero
      );
      return axiosSuccess(ResponseGen, 'GeneroService.update');
    } catch (error: any) {
      return axiosError(error, 'GeneroService');
    }
  },
  delete: async (Genero: ICGenero): Promise<AxiosResponsePPD> => {
    try {
      const ResponseGenero = await axios.delete<Message>(
        `${BASE_URL_API}/Genero`,
        { data: Genero }
      );
      return axiosSuccess(ResponseGenero, 'GeneroService.delete');
    } catch (error: any) {
      return axiosError(error, 'GeneroService');
    }
  },
};
