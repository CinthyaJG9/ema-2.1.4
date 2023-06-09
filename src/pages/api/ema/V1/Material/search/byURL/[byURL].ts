import { searchMaterialByURLOfDB } from '@/database/Entities';
import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseMaterial} from '@/typings';
import { apiSuccess, apiError } from '@/utils';

type Data = { message: string } | ResponseMaterial;
const searchMaterialByURL = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  try {
    const { url } = req.query;
    const dataMaterial = await searchMaterialByURLOfDB(url as string);

    if (!dataMaterial)
      return res.status(404).json({ message: 'Material no encontrada' });
    return apiSuccess(res, dataMaterial, 'Material by url');
  } catch (error) {
    return apiError(res, error, 'searchMaterialByURL');
  }
};

export default searchMaterialByURL;
