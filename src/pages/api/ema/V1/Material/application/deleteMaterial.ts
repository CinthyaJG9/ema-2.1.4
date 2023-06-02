import { NextApiRequest, NextApiResponse } from 'next';
import { MMMaterial } from '@/models';
import { IMMaterial } from '@/interfaces';
import { deleteMaterialOfDB } from '@/database/Entities';
import { apiResponse, apiResponseError } from '@/utils';

type Data = { message: string } | MMMaterial;

const deleteMaterial = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { id_mat, url_mat, id_sub, valida_mat }: IMMaterial = req.body;

    const dataMaterial = await deleteMaterialOfDB({
      id_mat,
      url_mat,
      id_sub,
      valida_mat,
    });

    return apiResponse(res, dataMaterial, 'Deleted', 'Material');
  } catch (error) {
    return apiResponseError(res, error, 'Material');
  }
};

export default deleteMaterial;
