import { NextApiRequest, NextApiResponse } from 'next';
import { searchEstudianteByBoletaOfDB } from '@/database/Entities';
import { apiSuccess, apiError } from '@/utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      try {
        const { boleta } = req.query;

        const dataEstudiantes = await searchEstudianteByBoletaOfDB(
          boleta as string
        );
        return apiSuccess(res, dataEstudiantes, 'Estudiante by boletaa');
      } catch (error) {
        return apiError(res, error, 'searchByBoleta');
      }
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
