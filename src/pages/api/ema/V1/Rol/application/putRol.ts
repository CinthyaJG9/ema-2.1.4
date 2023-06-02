import { NextApiRequest, NextApiResponse } from 'next';
import { MCRol } from '@/models';
import { ICRol } from '@/interfaces';
import { putRolOfDB } from '@/database/Entities';
import { apiResponse, apiResponseError } from '@/utils';

type Data = { message: string } | MCRol;

const putRol = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_rol, tipo_rol, valida_rol }: ICRol = req.body;
    const dataRol = await putRolOfDB({
      id_rol,
      tipo_rol,
      valida_rol,
    });
  
    if (dataRol) {
      return apiResponse(res, dataRol, 'Updated', 'Rol');
    } else {
      return apiResponseError(res, new Error('Error updating role'), 'Rol');
    }
  } catch (error) {
    return apiResponseError(res, error, 'Rol');
  }
}

export default putRol;
