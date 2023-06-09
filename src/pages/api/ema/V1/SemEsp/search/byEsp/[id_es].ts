import { searchSemEspByEspOfDB } from '@/database/Entities'
import { NextApiRequest, NextApiResponse } from 'next'
import { ResponseSemEsp } from '@/typings'
import { apiSuccess, apiError } from '@/utils'

type Data = { message: string } | ResponseSemEsp
const searchSemEspByEsp = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_es } = req.query

    const dataSemEsp = await searchSemEspByEspOfDB(Number(id_es))

    return apiSuccess(res, dataSemEsp, 'searchSemEspBySem')
  } catch (error) {
    return apiError(res, error, 'searchSemEspBySem')
  }
}

export default searchSemEspByEsp
