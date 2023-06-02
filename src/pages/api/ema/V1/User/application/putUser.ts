import { NextApiRequest, NextApiResponse } from 'next'
import { apiResponse, apiResponseError } from '@/utils'
import { putUserOfDB } from '@/database/Entities'
import { IDUser } from '@/interfaces'
import { MDUser } from '@/models'

type Data = { message: string } | MDUser

const putUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { correo_user, password_user, id_rol, id_per, valida_user }: IDUser =
    req.body

  try {
    const dataUser = await putUserOfDB({
      correo_user,
      password_user,
      id_rol,
      id_per,
      valida_user
    })
    return apiResponse(res, dataUser, 'Updated', 'User')
  } catch (error) {
    return apiResponseError(res, error, 'User')
  }
}

export default putUser
