import { RowDataPacket } from 'mysql2'
import { ICTema } from '@/interfaces/Entities'

interface MCTema extends RowDataPacket, ICTema {}

export default MCTema
