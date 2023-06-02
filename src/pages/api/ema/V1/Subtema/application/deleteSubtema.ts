import { NextApiRequest, NextApiResponse } from 'next'
import { apiResponse, apiResponseError } from '@/utils'
import { deleteSubtemaOfDB } from '@/database/Entities'
import { ICSubtema } from '@/interfaces'
import { MCSubtema } from '@/models'

type Data = { message: string } | MCSubtema

const deleteSubtema = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_sub, nombre_sub, id_tem, valida_sub }: ICSubtema = req.body

    const dataSubtema = await deleteSubtemaOfDB({
      id_sub,
      nombre_sub,
      id_tem,
      valida_sub
    })

    if (dataSubtema) {
      return apiResponse(res, dataSubtema, 'Updated', 'Subtema');
    } else {
      throw new Error('Data is null');
    }
  } catch (error) {
    return apiResponseError(res, error, 'Subtema');
  }
}

export default deleteSubtema
