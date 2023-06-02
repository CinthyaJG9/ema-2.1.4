import { NextApiRequest, NextApiResponse } from 'next'
import { apiSuccess, apiError } from '@/utils'
import { getAllTemasOfDB } from '@/database/Entities'
import { ResponseTema } from '@/typings'

const getAllTemas = async (
  _req: NextApiRequest,
  res: NextApiResponse<ResponseTema>
) => {
  try {
    const dataTema = await getAllTemasOfDB()
    return apiSuccess(res, dataTema, 'getAllTemas')
  } catch (error) {
    return apiError(res, error, 'getAllTemas')
  }
}

export default getAllTemas
