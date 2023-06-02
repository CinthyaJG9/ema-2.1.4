import { NextApiRequest, NextApiResponse } from 'next'
import { apiSuccess, apiError } from '@/utils'
import { searchSubtemaByIdOfDB } from '@/database/Entities'
import { ResponseSubtema } from '@/typings'

const searchSubtemaById = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseSubtema>
) => {
  try {
    const { id_sub } = req.query

    const dataSubtema = await searchSubtemaByIdOfDB(Number(id_sub))

    return apiSuccess(res, dataSubtema, 'searchSubtemaById')
  } catch (error) {
    return apiError(res, error, 'searchSubtemaById')
  }
}

export default searchSubtemaById
