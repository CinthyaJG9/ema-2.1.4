import { NextApiRequest, NextApiResponse } from 'next'
import { apiResponse, apiResponseError } from '@/utils'
import { deleteUaprendizajeOfDB } from '@/database/Entities'
import { ICUaprendizaje } from '@/interfaces'
import { MCUaprendizaje } from '@/models'

type Data = { message: string } | MCUaprendizaje

const deleteUnidadAprendizaje = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_ua, nombre_ua, id_semesp, valida_ua }: ICUaprendizaje = req.body

    const dataUAprendizaje = await deleteUaprendizajeOfDB({
      id_ua,
      nombre_ua,
      id_semesp,
      valida_ua
    })

    return apiResponse(res, dataUAprendizaje, 'Deleted', 'UAprendizaje')
  } catch (error) {
    return apiResponseError(res, error, 'UAprendizaje')
  }
}

export default deleteUnidadAprendizaje
