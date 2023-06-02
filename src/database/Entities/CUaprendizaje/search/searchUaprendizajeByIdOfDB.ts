import { pool } from '@/config/db';
import { MCUaprendizaje } from '@/models';
import { ICUaprendizaje } from '@/interfaces';
import { UaAdapter } from '../adapter';
import { databaseError } from '@/utils';

const searchUaprendizajeByIdOfDB = async (
  id_ua?: number | null
): Promise<ICUaprendizaje[]> => {
  try {
    const [RowsDataCUaprendizaje] = await pool.query<MCUaprendizaje[]>(
      'SELECT * FROM CUaprendizaje WHERE id_ua = ?',
      [id_ua]
    );

    return await UaAdapter(RowsDataCUaprendizaje);
  } catch (error) {
    return databaseError(error);
  }
};
export default searchUaprendizajeByIdOfDB;
