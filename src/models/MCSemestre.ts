import { RowDataPacket } from 'mysql2'
import { ICSemestre } from '@/interfaces/Entities'

interface MCSemestre extends RowDataPacket, ICSemestre {}

export default MCSemestre
