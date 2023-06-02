import { NextApiRequest, NextApiResponse } from 'next'
import { apiSuccess, apiError } from '@/utils'
import { searchSubtemaByTemaOfDB } from '@/database/Entities'
import { ResponseSubtema } from '@/typings'

const searchSubtemaById = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseSubtema>
) => {
  try {
    const { id_tem } = req.query

    const dataSubtema = await searchSubtemaByTemaOfDB(Number(id_tem))

    return apiSuccess(res, dataSubtema, 'searchSubtemaById')
  } catch (error) {
    return apiError(res, error, 'searchSubtemaById')
  }
}

export default searchSubtemaById
