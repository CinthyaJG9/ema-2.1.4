import { RowDataPacket } from 'mysql2'
import { IDUserReq } from '@/interfaces/Entities'

interface MDUser extends RowDataPacket, IDUserReq {}

export default MDUser
