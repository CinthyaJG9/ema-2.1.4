import { searchUserByEmailOfDB, searchEspecialidadByIdOfDB, searchSemestreByIdOfDB } from '@/database/Entities';
import { databaseSuccess } from '@/utils';
import { IMEstudianteReq, IMEstudianteRes } from '@/interfaces';
import { perseBitToNumber } from '@/libs';

type estudianteAdap = (
  RowsDataMEstudiante: IMEstudianteReq[]
) => Promise<IMEstudianteRes[]>;

export const EstudianteAdapter: estudianteAdap = async (
  RowsDataMEstudiante
) => {
  return await databaseSuccess(RowsDataMEstudiante, async () => {
    return await Promise.all(
      RowsDataMEstudiante.map(async (estudiante) => {
        const [user] = await searchUserByEmailOfDB(
          estudiante.correo_user
        );
        const [especialidad] = await searchEspecialidadByIdOfDB(
          estudiante.id_es
        );
        const [semestre] = await searchSemestreByIdOfDB(
          estudiante.id_sem
        );
        return {
          boleta_est: estudiante.boleta_est,
          user: user,
          especialidad: especialidad,
          semestre: semestre,
          valida_est: perseBitToNumber(estudiante.valida_est),
        };
      })
    );
  });
};
