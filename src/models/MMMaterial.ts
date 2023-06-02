import { RowDataPacket } from 'mysql2'
import { IMMaterial } from '@/interfaces/Entities'

interface MMMaterial extends RowDataPacket, IMMaterial {}

export default MMMaterial
