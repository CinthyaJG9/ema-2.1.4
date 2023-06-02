import { NextApiRequest, NextApiResponse } from 'next'
import { apiResponse, apiResponseError } from '@/utils'
import { postParcialOfDB } from '@/database/Entities'
import { ICParcial } from '@/interfaces'
import { MCParcial } from '@/models'

type Data = { message: string } | MCParcial

const postParcial = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_par, nombre_par, valida_par }: ICParcial = req.body

    const dataParcial = await postParcialOfDB({
      id_par,
      nombre_par,
      valida_par
    })

    return apiResponse(res, dataParcial, 'Created', 'Parcial')
  } catch (error) {
    return apiResponseError(res, error, 'Parcial')
  }
}

export default postParcial
