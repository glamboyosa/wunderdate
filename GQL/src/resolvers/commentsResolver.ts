import { Query, Resolver, Mutation, Arg, Ctx } from 'type-graphql'
import { Comment, CommentCreateInput } from '../generated/typegraphql-prisma'
import { context } from '../utils/types'
@Resolver()
export class CommentsResolver {
  @Query(() => [Comment])
  async comments(@Ctx() { prisma }: context) {
    return await prisma.comment.findMany()
  }

  @Mutation(() => Boolean)
  createComment(@Arg('CommentInput') data: CommentCreateInput): Boolean {
    console.log(data)
    return true
  }
}
