import { NextApiRequest, NextApiResponse } from 'next'
import { apiResponse, apiResponseError } from '@/utils'
import { postSemestreOfDB } from '@/database/Entities'
import { MCSemestre } from '@/models'
import { ICSemestre } from '@/interfaces'

type Data = { message: string } | MCSemestre

const postSemestre = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_sem, tipo_sem, valida_sem }: ICSemestre = req.body

    const dataSemestre = await postSemestreOfDB({
      id_sem,
      tipo_sem,
      valida_sem
    })

    return apiResponse(res, dataSemestre, 'Created', 'Semestre')
  } catch (error) {
    return apiResponseError(res, error, 'Semestre')
  }
}

export default postSemestre
