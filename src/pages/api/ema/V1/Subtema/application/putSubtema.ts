import { NextApiRequest, NextApiResponse } from 'next'
import { apiResponse, apiResponseError } from '@/utils'
import { putSubtemaOfDB } from '@/database/Entities'
import { ICSubtema } from '@/interfaces'
import { MCSubtema } from '@/models'

type Data = { message: string } | MCSubtema

const putSubtema = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_sub, nombre_sub, id_tem, valida_sub }: ICSubtema = req.body

    const dataSubtema = await putSubtemaOfDB({
      id_sub,
      nombre_sub,
      id_tem,
      valida_sub
    })

    if (dataSubtema && dataSubtema.length > 0) {
      return apiResponse(res, dataSubtema, 'Updated', 'Subtema')
    } else {
      throw new Error('Error actualizando subtema')
    }
  } catch (error) {
    return apiResponseError(res, error, 'Subtema')
  }
}

export default putSubtema
