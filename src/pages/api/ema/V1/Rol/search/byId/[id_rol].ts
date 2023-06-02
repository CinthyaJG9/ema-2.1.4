import { NextApiRequest, NextApiResponse } from 'next'
import { apiSuccess, apiError } from '@/utils'
import { searchRolByIdOfDB } from '@/database/Entities'
import { ResponseRol } from '@/typings'

type Data = { message: string } | ResponseRol
const searchRolById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_rol } = req.query

    const dataRol = await searchRolByIdOfDB(Number(id_rol))

    return apiSuccess(res, dataRol, 'searchRolById')
  } catch (error) {
    return apiError(res, error, 'searchRolById')
  }
}

export default searchRolById
