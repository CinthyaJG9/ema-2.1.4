import { NextApiRequest, NextApiResponse } from 'next';
import { MCEspecialidad } from '@/models';
import { ICEspecialidad } from '@/interfaces';
import { postEspecialidadOfDB } from '@/database/Entities';
import { apiResponse, apiResponseError } from '@/utils';

type Data = { message: string } | MCEspecialidad;

const postEspecialidad = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_es, nombre_es, valida_es }: ICEspecialidad = req.body;

    const dataEspecialidad = await postEspecialidadOfDB({
      id_es,
      nombre_es,
      valida_es,
    });

    return apiResponse(res, dataEspecialidad, 'Created', 'Especialidad');
  } catch (error) {
    return apiResponseError(res, error, 'Especialidad');
  }
};

export default postEspecialidad;
