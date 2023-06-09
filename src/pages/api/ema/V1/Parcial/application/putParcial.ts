import { NextApiRequest, NextApiResponse } from 'next'
import { apiResponse, apiResponseError } from '@/utils'
import { putParcialOfDB } from '@/database/Entities'
import { ICParcial } from '@/interfaces'
import { MCParcial } from '@/models'

type Data = { message: string } | MCParcial

const putParcial = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_par, nombre_par, valida_par }: ICParcial = req.body

    const dataParcial = await putParcialOfDB({
      id_par,
      nombre_par,
      valida_par
    })

    return apiResponse(res, dataParcial, 'Updated', 'Parcial')
  } catch (error) {
    return apiResponseError(res, error, 'Parcial')
  }
}

export default putParcial
