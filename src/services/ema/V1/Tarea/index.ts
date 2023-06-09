import axios from 'axios';
import { BASE_URL_API } from '@/libs';

export const TareaService = {
  getAll: async () => {
    try {
      const { data } = await axios.get(`${BASE_URL_API}Tarea`);
      return data;
    } catch (error: any) {
      if (error.response) {
        // La respuesta fue hecha y el servidor respondió con un código de estado
        // que esta fuera del rango de 2xx

      } else if (error.request) {
        // La petición fue hecha pero no se recibió respuesta
        // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
        // http.ClientRequest en node.js

      } else {
        // Algo paso al preparar la petición que lanzo un Error

      }

      return [];
    }
  },
  getOne: async (id: number) => {
    try {
      const { data } = await axios.get(`${BASE_URL_API}Tarea/${id}`);
      return data;
    } catch (error: any) {
      if (error.response) {
        // La respuesta fue hecha y el servidor respondió con un código de estado
        // que esta fuera del rango de 2xx

      } else if (error.request) {
        // La petición fue hecha pero no se recibió respuesta
        // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
        // http.ClientRequest en node.js

      } else {
        // Algo paso al preparar la petición que lanzo un Error

      }

      return [];
    }
  },
  create: async (Tarea: any) => {
    try {
      const { data } = await axios.post(`${BASE_URL_API}Tarea`, Tarea);
      return data;
    } catch (error: any) {
      if (error.response) {
        // La respuesta fue hecha y el servidor respondió con un código de estado
        // que esta fuera del rango de 2xx

      } else if (error.request) {
        // La petición fue hecha pero no se recibió respuesta
        // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
        // http.ClientRequest en node.js

      } else {
        // Algo paso al preparar la petición que lanzo un Error

      }

      return [];
    }
  },
  update: async (Tarea: any) => {
    try {
      const { data } = await axios.put(`${BASE_URL_API}Tarea`, Tarea);
      return data;
    } catch (error: any) {
      if (error.response) {
        // La respuesta fue hecha y el servidor respondió con un código de estado
        // que esta fuera del rango de 2xx

      } else if (error.request) {
        // La petición fue hecha pero no se recibió respuesta
        // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
        // http.ClientRequest en node.js

      } else {
        // Algo paso al preparar la petición que lanzo un Error

      }

      return [];
    }
  },
  delete: async (id: number) => {
    try {
      const { data } = await axios.delete(`${BASE_URL_API}Tarea/${id}`);
      return data;
    } catch (error: any) {
      if (error.response) {
        // La respuesta fue hecha y el servidor respondió con un código de estado
        // que esta fuera del rango de 2xx

      } else if (error.request) {
        // La petición fue hecha pero no se recibió respuesta
        // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
        // http.ClientRequest en node.js

      } else {
        // Algo paso al preparar la petición que lanzo un Error

      }

      return [];
    }
  },
};
