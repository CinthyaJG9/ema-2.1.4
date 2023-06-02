import { RowDataPacket } from 'mysql2'
import { ICUaprendizaje } from '@/interfaces/Entities'

interface MCUaprendizaje extends RowDataPacket, ICUaprendizaje {}

export default MCUaprendizaje
