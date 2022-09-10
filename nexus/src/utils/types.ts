import {
  objectType,
  booleanArg,
  intArg,
  nonNull,
  extendType,
  stringArg,
} from 'nexus'
import { context } from '../context'
interface IApplicationQuery {
  roleId: number
}
interface IApplicationParam {
  id: number
}
interface IPositionQuery {
  open: boolean
}
interface IApplicationBody {
  open: boolean
  id: number
  status: string
}
const User = objectType({
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('email')
    t.string('name')
    t.list.field('role', {
      type: 'String',
    })
    t.list.field('role', {
      type: Application,
    })
  },
})
const Application = objectType({
  name: 'Application',
  definition(t) {
    t.int('id')
    t.nullable.string('message')
    t.string('status')
    t.int('roleId')
    t.field('role', {
      type: Position,
    })
    t.field('users', { type: User })
    t.list.field('comments', { type: Comment })
  },
})
const Position = objectType({
  name: 'Position',
  definition(t) {
    t.int('id')
    t.string('name')
    t.boolean('open')
    t.nullable.string('description')
    t.list.field('application', { type: Application })
  },
})
const Comment = objectType({
  name: 'Comment',
  definition(t) {
    t.int('id')
    t.string('message')
    t.string('from')
    t.int('applicationId')
    t.field('application', { type: Application })
  },
})

const Query = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('getApplications', {
      type: Application,
      resolve: (_, __, ctx: context) => {
        return ctx.prisma.application.findMany({
          include: {
            comments: true,
            users: true,
            role: true,
          },
        })
      },
    })
    t.field('getApplication', {
      type: Application,
      args: {
        id: nonNull(intArg()),
      },
      resolve: (_, { id }: IApplicationParam, ctx: context) => {
        return ctx.prisma.application.findUnique({
          where: { id },
          include: {
            comments: true,
            users: true,
            role: true,
          },
        })
      },
    })
    t.list.field('getApplicationsWithQuery', {
      type: Application,
      args: {
        roleId: nonNull(intArg()),
      },
      resolve: (_, { roleId }: IApplicationQuery, ctx: context) => {
        return ctx.prisma.application.findMany({
          where: {
            roleId,
          },
          include: {
            comments: true,
            users: true,
            role: true,
          },
        })
      },
    })
    t.list.field('getPositions', {
      type: Position,
      resolve: (_, __, ctx: context) => {
        return ctx.prisma.position.findMany({
          include: {
            application: true,
          },
        })
      },
    })
    t.list.field('getPositionsWithQuery', {
      type: Position,
      args: {
        open: nonNull(booleanArg()),
      },
      resolve: (_, { open }: IPositionQuery, ctx: context) => {
        return ctx.prisma.position.findMany({
          where: {
            open,
          },
          include: {
            application: true,
          },
        })
      },
    })
  },
})
const Mutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('updateApplication', {
      type: Application,
      args: {
        id: nonNull(intArg()),
        open: nonNull(booleanArg()),
        status: nonNull(stringArg()),
      },
      resolve: (_, { id, open, status }: IApplicationBody, ctx: context) => {
        const betterTypedStatus = status as 'accepted' | 'rejected' | 'pending'
        return ctx.prisma.application.update({
          where: {
            id,
          },
          data: {
            status: betterTypedStatus,
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
      },
    })
  },
})
export { User, Application, Position, Comment, Query, Mutation, context }
