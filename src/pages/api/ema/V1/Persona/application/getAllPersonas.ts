import { NextApiRequest, NextApiResponse } from 'next'
import { getAllPersonasOfDB } from '@/database/Entities'
import { apiError, apiSuccess } from '@/utils'
import { ResponsePersona } from '@/typings'

const getAllPersonas = async (
  _req: NextApiRequest,
  res: NextApiResponse<ResponsePersona>
) => {
  try {
    const dataPersonas = await getAllPersonasOfDB()
    return apiSuccess(res, dataPersonas, 'Personas')
  } catch (error) {
    return apiError(res, error, 'getAllPersonas')
  }
}

export default getAllPersonas
