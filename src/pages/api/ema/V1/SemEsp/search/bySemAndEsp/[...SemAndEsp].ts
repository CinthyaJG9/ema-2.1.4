import { NextApiRequest, NextApiResponse } from 'next'
import { apiSuccess, apiError } from '@/utils'
import { ResponseSemEsp } from '@/typings'
import { searchSemEspBySemAndEspOfDB } from '@/database/Entities'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseSemEsp>
) {
  try {
    const [id_sem, id_es] = req.query.SemAndEsp as string[]

    const dataSemEsp = await searchSemEspBySemAndEspOfDB(
      Number(id_sem),
      Number(id_es)
    )
    return apiSuccess(res, dataSemEsp, 'SemEsp')
  } catch (error) {
    return apiError(res, error, 'searchSemEsp')
  }
}
