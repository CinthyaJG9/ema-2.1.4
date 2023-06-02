import { NextApiRequest, NextApiResponse } from 'next'
import { apiResponse, apiResponseError } from '@/utils'
import { putSemEspOfDB } from '@/database/Entities'
import { IESemEsp } from '@/interfaces'
import { MESemEsp } from '@/models'

type Data = { message: string } | MESemEsp

const putSemEsp = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const { id_semesp, id_sem, id_es, valida_semesp }: IESemEsp = req.body;
  
    const dataSemEsp = await putSemEspOfDB({
      id_semesp,
      id_sem,
      id_es,
      valida_semesp,
    });
  
    if (dataSemEsp) {
      return apiResponse(res, dataSemEsp, 'Updated', 'SemEsp');
    } else {
      throw new Error('Data is null');
    }
  } catch (error) {
    return apiResponseError(res, error, 'SemEsp');
  }
}

export default putSemEsp
