import { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { deleteRol, getAllRoles, postRol, putRol } from './application'
import { getServerSession } from 'next-auth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions)
  console.log(session)

  switch (req.method) {
    case 'GET':
      return await getAllRoles(req, res)
    case 'POST':
      return await postRol(req, res)
    case 'PUT':
      return await putRol(req, res)
    case 'DELETE':
      return await deleteRol(req, res)
    default:
      return res.status(405).json({ message: 'Bad request' })
  }
}
