import { NextApiRequest, NextApiResponse } from 'next';
import { searchEstudianteByEmailOfDB } from '@/database/Entities';
import { apiSuccess, apiError } from '@/utils';

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<DataSubtopic>
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      try {
        const { email } = req.query;

        const dataEstudiantes = await searchEstudianteByEmailOfDB(
          email as string
        );
        return apiSuccess(res, dataEstudiantes, 'Estudiante by Email');
      } catch (error) {
        return apiError(res, error, 'searchByEmail');
      }
    default:
      return res.status(405).json({ message: 'Bad request' });
  }
}
