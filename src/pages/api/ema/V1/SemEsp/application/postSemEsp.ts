import { NextApiRequest, NextApiResponse } from 'next'
import { apiResponse, apiResponseError } from '@/utils'
import { postSemEspOfDB } from '@/database/Entities'
import { IESemEsp } from '@/interfaces'
import { MESemEsp } from '@/models'

type Data = { message: string } | MESemEsp

const postSemEsp = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_semesp, id_sem, id_es, valida_semesp }: IESemEsp = req.body

    const dataSemEsp = await postSemEspOfDB({
      id_semesp,
      id_sem,
      id_es,
      valida_semesp
    })

    return apiResponse(res, dataSemEsp, 'Created', 'SemEsp')
  } catch (error) {
    return apiResponseError(res, error, 'SemEsp')
  }
}

export default postSemEsp
