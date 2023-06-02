import { perseBitToNumber } from '@/libs';
import { ICGenero } from '@/interfaces';
import { databaseSuccess } from '@/utils';

export const GeneroAdapter = (
  RowsDataCGenero: ICGenero[]
): ICGenero[] => {
  return databaseSuccess(RowsDataCGenero, () => {
    return RowsDataCGenero.map((genero) => {
      return {
        id_gen: genero.id_gen,
        tipo_gen: genero.tipo_gen,
        valida_gen: perseBitToNumber(genero.valida_gen),
      };
    });
  }) as ICGenero[];
};
