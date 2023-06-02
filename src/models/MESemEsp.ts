import { RowDataPacket } from 'mysql2'
import { IESemEsp } from '@/interfaces/Entities'

interface MESemEsp extends RowDataPacket, IESemEsp {}

export default MESemEsp
