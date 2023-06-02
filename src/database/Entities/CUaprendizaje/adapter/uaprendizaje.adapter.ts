import { perseBitToNumber } from '@/libs';
import { databaseSuccess } from '@/utils';
import { ICUaprendizaje } from '@/interfaces';
import { searchSemEspByIdOfDB, searchSemestreByIdOfDB } from '@/database/Entities';

// type uaprendizajeAdap= (
// 	data: ICUaprendizajeReq[]

// 	)=> ICUaprendizajeRes[] | Promise<ICUaprendizajeRes[]>;

export const UaAdapter = async (
  RowsDataCUaprendizaje: ICUaprendizaje[]
): Promise<ICUaprendizaje[]> => {
  return await databaseSuccess(RowsDataCUaprendizaje, async () => {
    return await Promise.all(
      RowsDataCUaprendizaje.map(async (ua) => {
        const [semesp] = await searchSemEspByIdOfDB(ua.id_semesp);
        return {
          id_ua: ua.id_ua,
          nombre_ua: ua.nombre_ua,
          id_semesp: ua.id_semesp,
          semesp: semesp,
          valida_ua: perseBitToNumber(ua.valida_ua),
        };
      })
    );
  });
};
