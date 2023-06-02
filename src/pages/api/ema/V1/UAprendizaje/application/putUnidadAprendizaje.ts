import { NextApiRequest, NextApiResponse } from 'next'
import { apiResponse, apiResponseError } from '@/utils'
import { putUaprendizajeOfDB } from '@/database/Entities'
import { ICUaprendizaje } from '@/interfaces'
import { MCUaprendizaje } from '@/models'

type Data = { message: string } | MCUaprendizaje

const putUnidadAprendizaje = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_ua, nombre_ua, id_semesp, valida_ua }: ICUaprendizaje = req.body

    const dataUAprendizaje = await putUaprendizajeOfDB({
      id_ua,
      nombre_ua,
      id_semesp,
      valida_ua
    })

    return apiResponse(res, dataUAprendizaje, 'Updated', 'UAprendizaje')
  } catch (error) {
    return apiResponseError(res, error, 'UAprendizaje')
  }
}

export default putUnidadAprendizaje
