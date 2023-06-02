import { RowDataPacket } from 'mysql2'
import { IMEstudiante, IMEstudianteReq } from '@/interfaces/Entities'

interface MMEstudiante extends RowDataPacket, IMEstudiante {}
interface MMEstudianteReq extends RowDataPacket, IMEstudianteReq {}

export type { MMEstudiante, MMEstudianteReq }
