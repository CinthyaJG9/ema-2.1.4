import { NextApiRequest, NextApiResponse } from 'next'
import { getAllUaprendizajeOfDB } from '@/database/Entities'
import { apiSuccess, apiError } from '@/utils'

const getAllUnidades = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const dataUnidades = await getAllUaprendizajeOfDB()
    return apiSuccess(res, dataUnidades, 'Unidades')
  } catch (error) {
    return apiError(res, error, 'getAllUnidades')
  }
}

export default getAllUnidades
