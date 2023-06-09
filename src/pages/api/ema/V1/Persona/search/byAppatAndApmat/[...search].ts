import { NextApiRequest, NextApiResponse } from 'next'
import { apiSuccess, apiError } from '@/utils'
import { ResponsePersona } from '@/typings'
import { searchPersonaByApptAndApmatOfDB } from '@/database/Entities'

type Data = { message: string } | ResponsePersona
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET': {
      try {
        const [appat, apmat] = req.query.search as string[]

        const dataPersonas = await searchPersonaByApptAndApmatOfDB(appat, apmat)
        return apiSuccess(res, dataPersonas, 'Person')
      } catch (error) {
        return apiError(res, error, 'searchByAppatAndApmat')
      }
    }
    default:
      return res.status(405).json({ message: 'Bad request' })
  }
}
