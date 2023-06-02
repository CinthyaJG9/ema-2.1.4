import { NextApiRequest, NextApiResponse } from 'next'
import { apiResponse, apiResponseError } from '@/utils'
import { deleteRolOfDB } from '@/database/Entities'
import { ICRol } from '@/interfaces'
import { MCRol } from '@/models'

type Data = { message: string } | MCRol

const deleteRol = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_rol, tipo_rol, valida_rol }: ICRol = req.body

    const dataRol = await deleteRolOfDB({
      id_rol,
      tipo_rol,
      valida_rol
    })

    return apiResponse(res, dataRol, 'Deleted', 'Rol')
  } catch (error) {
    return apiResponseError(res, error, 'Rol')
  }
}

export default deleteRol
