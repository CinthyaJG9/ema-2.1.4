import { RowDataPacket } from 'mysql2'
import { IMAdmin, IMAdminReq } from '@/interfaces/Entities'

interface MMAdmin extends RowDataPacket, IMAdmin {}
interface MMAdminReq extends RowDataPacket, IMAdminReq {}

export type { MMAdmin, MMAdminReq }
