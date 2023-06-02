import { NextApiRequest, NextApiResponse } from 'next'
import { apiResponse, apiResponseError } from '@/utils'
import { postPersonaOfDB } from '@/database/Entities'
import { IMPersona } from '@/interfaces'
import { MMPersona } from '@/models'

type Data = { message: string } | MMPersona

const postPersona = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const {
      id_per,
      nombre_per,
      appat_per,
      apmat_per,
      fecha_de_nacimiento_per,
      id_gen,
      id_int,
      valida_per
    }: IMPersona = req.body

    const dataPersona = await postPersonaOfDB({
      id_per,
      nombre_per,
      appat_per,
      apmat_per,
      fecha_de_nacimiento_per,
      id_gen,
      id_int,
      valida_per
    })

    return apiResponse(res, dataPersona, 'Created', 'Persona')
  } catch (error) {
    return apiResponseError(res, error, 'Persona')
  }
}

export default postPersona
