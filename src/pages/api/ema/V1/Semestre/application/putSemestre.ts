import { NextApiRequest, NextApiResponse } from 'next'
import { apiResponse, apiResponseError } from '@/utils'
import { putSemestreOfDB } from '@/database/Entities'
import { ICSemestre } from '@/interfaces'
import { MCSemestre } from '@/models'
type Data = { message: string } | MCSemestre

const putSemestre = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_sem, tipo_sem, valida_sem }: ICSemestre = req.body

    const dataSemestre = await putSemestreOfDB({
      id_sem,
      tipo_sem,
      valida_sem
    })

    return apiResponse(res, dataSemestre, 'Updated', 'Semestre')
  } catch (error) {
    return apiResponseError(res, error, 'Semestre')
  }
}

export default putSemestre
