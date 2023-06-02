import { RowDataPacket } from 'mysql2'
import { ICSubtema } from '@/interfaces/Entities'

interface MCSubtema extends RowDataPacket, ICSubtema {}

export default MCSubtema
