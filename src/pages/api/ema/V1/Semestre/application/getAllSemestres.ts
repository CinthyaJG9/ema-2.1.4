import { NextApiRequest, NextApiResponse } from 'next'
import { apiSuccess, apiError } from '@/utils'
import { getAllSemestresOfDB } from '@/database/Entities'
import { ResponseSemestre } from '@/typings'

const getAllSemestres = async (
  _req: NextApiRequest,
  res: NextApiResponse<ResponseSemestre>
) => {
  try {
    const dataSemestre = await getAllSemestresOfDB()
    return apiSuccess(res, dataSemestre, 'getAllSemestres')
  } catch (error) {
    return apiError(res, error, 'getAllSemestres')
  }
}

export default getAllSemestres
