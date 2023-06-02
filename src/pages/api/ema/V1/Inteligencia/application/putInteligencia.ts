import { NextApiRequest, NextApiResponse } from 'next';
import { MCInteligencia } from '@/models';
import { ICInteligencia } from '@/interfaces';
import { putInteligenciaOfDB } from '@/database/Entities';
import { apiResponse, apiResponseError } from '@/utils';

type Data = { message: string } | MCInteligencia;

const putInteligencia = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_int, tipo_int, valida_int }: ICInteligencia = req.body;

    const dataInteligencia = await putInteligenciaOfDB({
      id_int,
      tipo_int,
      valida_int,
    });

    return apiResponse(res, dataInteligencia, 'Updated', 'Inteligencia');
  } catch (error) {
    return apiResponseError(res, error, 'Inteligencia');
  }
};

export default putInteligencia;
