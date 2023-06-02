import { RowDataPacket } from 'mysql2'
import { ICEspecialidad } from '@/interfaces'

interface MCEspecialidad extends RowDataPacket, ICEspecialidad {}

export default MCEspecialidad
