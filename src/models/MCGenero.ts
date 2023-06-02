import { RowDataPacket } from 'mysql2'
import { ICGenero, ICGeneroReq } from '@/interfaces'

interface MCGenero extends RowDataPacket, ICGenero {}
interface MCGeneroReq extends RowDataPacket, ICGeneroReq {}

export type { MCGenero, MCGeneroReq }
