import { perseBitToNumber } from '@/libs';
import { searchRolByIdOfDB, searchPersonaByIdOfDB } from '@/database/Entities';
import { IDUserReq, IDUserRes } from '@/interfaces';
import { databaseSuccess } from '@/utils';

type userAdap = (RowsDataIDUser: IDUserReq[]) => Promise<IDUserRes[]>;

export const UserAdapter: userAdap = async (RowsDataIDUser) => {
  return await databaseSuccess<IDUserRes>(RowsDataIDUser, async () => {
    return await Promise.all(
      RowsDataIDUser.map(async (user) => {
        const [rol] = await searchRolByIdOfDB(user.id_rol);
        const [persona] = await searchPersonaByIdOfDB(user.id_per);
        return {
          correo_user: user.correo_user,
          password_user: user.password_user,
          rol: rol,
          persona: persona,
          img_user: user.img_user,
          valida_user: perseBitToNumber(user.valida_user),
        };
      })
    );
  });
};
