import { NextApiRequest, NextApiResponse } from 'next'
import { apiResponse, apiResponseError } from '@/utils'
import { postUserOfDB } from '@/database/Entities'
import { IDUser } from '@/interfaces'
import { MDUser } from '@/models'

type Data = { message: string } | MDUser

const postUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { correo_user, password_user, id_rol, id_per, valida_user }: IDUser =
      req.body

    const dataUser = await postUserOfDB({
      correo_user,
      password_user,
      id_rol,
      id_per,
      valida_user
    })

    return apiResponse(res, dataUser, 'Created', 'User')
  } catch (error) {
    return apiResponseError(res, error, 'User')
  }
}

export default postUser
