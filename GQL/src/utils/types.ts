import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

export interface context {
  req: Request
  res: Response
  prisma: PrismaClient
}
