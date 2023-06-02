import { RowDataPacket } from 'mysql2'
import { ICParcial } from '@/interfaces/Entities'

interface MCParcial extends RowDataPacket, ICParcial {}

export default MCParcial
