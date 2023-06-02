import { NextApiRequest, NextApiResponse } from 'next'
import { MMAdmin } from '@/models'
import { IMAdminReq } from '@/interfaces'
import { deleteAdminOfDB } from '@/database/Entities'
import { apiResponse, apiResponseError } from '@/utils'

type Data = { message: string } | MMAdmin

const deleteAdmin = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const Admin: IMAdminReq = req.body

    const dataAdmin = await deleteAdminOfDB(Admin)

    return apiResponse(res, dataAdmin, 'Updated', 'Admin')
  } catch (error) {
    return apiResponseError(res, error, 'Admin')
  }
}

export default deleteAdmin
