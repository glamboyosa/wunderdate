import { Query, Resolver, Mutation, Arg, Ctx } from 'type-graphql'
import {
  Comment,
  CommentCreateInput,
  CommentCreateWithoutApplicationInput,
} from '../generated/typegraphql-prisma'
import { context } from '../utils/types'
@Resolver()
export class CommentsResolver {
  @Query(() => [Comment])
  async getCommentsForApplication(
    @Arg('ApplicationId') applicationId: number,
    @Ctx() { prisma }: context,
  ) {
    return await prisma.comment.findMany({
      where: {
        applicationId,
      },
    })
  }

  @Mutation(() => Comment)
  async createComment(
    @Arg('CommentInput') inputData: CommentCreateWithoutApplicationInput,
    @Arg('ApplicationId') applicationId: number,
    @Ctx() { prisma }: context,
  ): Promise<Comment> {
    console.log(inputData)
    const data = {
      ...inputData,
      application: {
        connect: { id: applicationId },
      },
    }
    const comment = await prisma.comment.create({
      data,
    })
    return comment
  }
}
