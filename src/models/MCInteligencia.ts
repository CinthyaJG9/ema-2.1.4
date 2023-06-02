import { RowDataPacket } from 'mysql2'
import { ICInteligencia } from '@/interfaces/Entities'

interface MCInteligencia extends RowDataPacket, ICInteligencia {}

export default MCInteligencia
