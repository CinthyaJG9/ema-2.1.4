import { RowDataPacket } from 'mysql2'
import { IMPersona, IMPersonaReq } from '@/interfaces/Entities'

interface MMPersona extends RowDataPacket, IMPersona {}
interface MMPersonaReq extends RowDataPacket, IMPersonaReq {}

export type { MMPersona, MMPersonaReq }
