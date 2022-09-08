import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import { IPositionQuery } from '../utils/types'

const prisma = new PrismaClient()

const router = Router()

router.get('/', async (req, res) => {
  const { open: isOpen }: IPositionQuery = req.query

  if (isOpen) {
    const open: boolean = Boolean(isOpen)

    const positions = await prisma.position.findMany({
      where: {
        open,
      },
      include: {
        _count: {
          select: {
            application: true,
          },
        },
      },
    })
    return res.status(200).json(positions)
  }
  const positions = await prisma.position.findMany({
    include: {
      _count: {
        select: {
          application: true,
        },
      },
    },
  })

  res.status(200).json(positions)
})
export default router
