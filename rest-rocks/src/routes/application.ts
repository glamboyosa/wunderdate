import { PrismaClient } from '@prisma/client'
import { Router } from 'express'
import { IApplicationBody, IApplicationQuery } from '../utils/types'

const prisma = new PrismaClient()

const router = Router()

router.get('/', async (req, res) => {
  const { job }: IApplicationQuery = req.query

  if (job) {
    const roleId = Number(job)
    const applications = await prisma.application.findMany({
      where: {
        roleId,
      },
      include: {
        comments: true,
        users: true,
        role: true,
      },
    })
    return res.status(200).json(applications)
  }
  const applications = await prisma.application.findMany({
    include: {
      comments: true,
      users: true,
      role: true,
    },
  })
  res.status(200).json(applications)
})

router.get('/:id', async (req, res) => {
  const application = await prisma.application.findUnique({
    where: { id: Number(req.params.id) },
    include: {
      comments: true,
      users: true,
      role: true,
    },
  })
  res.status(200).json(application)
})

router.put('/:id', async (req, res) => {
  const { open, status }: IApplicationBody = req.body
  // update application and related job
  const application = await prisma.application.update({
    where: { id: Number(req.params.id) },
    data: {
      status,
      role: {
        update: {
          open,
        },
      },
    },
    include: {
      comments: true,
      users: true,
      role: true,
    },
  })
  res.status(200).json(application)
})

export default router
