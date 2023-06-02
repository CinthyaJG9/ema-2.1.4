import { RowDataPacket } from 'mysql2'
import { ICRol } from '@/interfaces/Entities'

interface MCRol extends RowDataPacket, ICRol {}

export default MCRol
