import { NextApiRequest, NextApiResponse } from 'next'
import { deleteSemEspOfDB } from '@/database/Entities'
import { apiResponse, apiResponseError } from '@/utils'
import { IESemEsp } from '@/interfaces'
import { MESemEsp } from '@/models'

type Data = { message: string } | MESemEsp

const deleteSemEsp = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_semesp, id_sem, id_es, valida_semesp }: IESemEsp = req.body

    const dataSemEsp = await deleteSemEspOfDB({
      id_semesp,
      id_sem,
      id_es,
      valida_semesp
    })

    return apiResponse(res, dataSemEsp, 'Deleted', 'SemEsp')
  } catch (error) {
    return apiResponseError(res, error, 'SemEsp')
  }
}

export default deleteSemEsp
