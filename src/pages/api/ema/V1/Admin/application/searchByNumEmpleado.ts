import { apiSuccess, apiError } from '@/utils';
import { NextApiRequest, NextApiResponse } from 'next';
import { searchAdminByNumEmpleadoOfDB } from '@/database/Entities';

const searchByNumEmpleado = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { num_empleado } = req.query;

    const dataAdmin = await searchAdminByNumEmpleadoOfDB(Number(num_empleado));
    return apiSuccess(res, dataAdmin, 'Admin by numempleado');
  } catch (error) {
    return apiError(res, error, 'searchByNumEmpleado');
  }
};

export default searchByNumEmpleado;
