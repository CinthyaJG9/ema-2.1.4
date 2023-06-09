import { searchTemaByIdOfDB } from '@/database/Entities'
import { NextApiRequest, NextApiResponse } from 'next'
import { ResponseTema } from '@/typings'
import { apiSuccess, apiError } from '@/utils'

type Data = { message: string } | ResponseTema
const searchTemaById = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_tem } = req.query

    const dataTema = await searchTemaByIdOfDB(Number(id_tem))

    if (!dataTema)
      return res.status(404).json({ message: 'Tema no encontrado' })

    return apiSuccess(res, dataTema, 'searchTemaById')
  } catch (error) {
    return apiError(res, error, 'searchTemaById')
  }
}

export default searchTemaById
