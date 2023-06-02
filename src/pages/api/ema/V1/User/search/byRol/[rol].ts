import { NextApiRequest, NextApiResponse } from 'next'
import { apiSuccess, apiError } from '@/utils'
import { searchUserByRolOfDB } from '@/database/Entities'
import { ResponseUser } from '@/typings'

type Data = { message: string } | ResponseUser
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET': {
      try {
        const { rol } = req.query
        const dataPersonas = await searchUserByRolOfDB(Number(rol))
        return apiSuccess(res, dataPersonas, 'Person')
      } catch (error) {
        return apiError(res, error, 'searchByAppatAndApmat')
      }
    }
    default:
      return res.status(405).json({ message: 'Bad request' })
  }
}
