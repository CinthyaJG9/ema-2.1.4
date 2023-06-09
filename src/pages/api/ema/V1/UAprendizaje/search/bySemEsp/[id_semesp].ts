import { NextApiRequest, NextApiResponse } from 'next'
import { apiSuccess, apiError } from '@/utils'
import { searchUaprendizajeBySemEspOfDB } from '@/database/Entities'
import { ResponseUaprendizaje } from '@/typings'

type Data = { message: string } | ResponseUaprendizaje

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET': {
      try {
        const { id_semesp } = req.query

        const dataUaprendizajes = await searchUaprendizajeBySemEspOfDB(
          Number(id_semesp)
        )
        return apiSuccess(res, dataUaprendizajes, 'Uaprendizaje')
      } catch (error) {
        return apiError(res, error, 'searchById')
      }
    }
    default:
      return res.status(405).json({ message: 'Bad request' })
  }
}
