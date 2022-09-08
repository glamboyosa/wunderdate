import { PrismaClient } from '@prisma/client'
// this file seeds the DB with some data.
// it creates a few users, applications, positions and comments
import { faker } from '@faker-js/faker'

async function main() {
  const users = [
    {
      email: faker.internet.email(),
      name: faker.name.fullName(),
      role: ['admin'],
      applications: {
        create: undefined,
      },
    },
    {
      email: faker.internet.email(),
      name: faker.name.fullName(),
      role: ['user'],
      applications: {
        create: [
          {
            message:
              "Hi team, I'm interested in this role. I've attached my resume and cover letter. Please let me know if you have any questions. Thanks!",
            role: {
              create: {
                name: 'Product Manager',
                open: true,
                description:
                  'We are looking for a product manager tasked with solving high impact problems to build products that tangibly benefit the lives of millions of people around the world. You’ll operate with high autonomy and accountability, leading your team to deliver measurable outcomes.',
              },
            },
            comments: {
              create: undefined,
            },
          },
        ],
      },
    },
    {
      email: faker.internet.email(),
      name: faker.name.fullName(),
      role: ['user'],
      applications: {
        create: [
          {
            message:
              "Hi team, I'm interested in this role. I've attached my resume and cover letter. Please let me know if you have any questions. Thanks!",
            role: {
              create: {
                name: 'Full Stack Engineer – Core',
                open: true,
                description:
                  'We are looking for a full stack software engineer to join the core team. You will collaborate with designers and other engineers to work on our core suite of products',
              },
            },
            comments: {
              create: undefined,
            },
          },
        ],
      },
    },
    {
      email: faker.internet.email(),
      name: faker.name.fullName(),
      role: ['user'],
      applications: {
        create: [
          {
            message:
              "Hi team, I'm interested in this role. I've attached my resume and cover letter. Please let me know if you have any questions. Thanks!",
            role: {
              create: {
                name: 'Full Stack Engineer – Core',
                open: true,
                description:
                  'We are looking for a full stack software engineer to join the core team. You will collaborate with designers and other engineers to work on our core suite of products',
              },
            },
            comments: {
              create: undefined,
            },
          },
        ],
      },
    },
    {
      email: faker.internet.email(),
      name: faker.name.fullName(),
      role: ['user'],
      applications: {
        create: [
          {
            message:
              "Hi team, I'm interested in this role. I've attached my resume and cover letter. Please let me know if you have any questions. Thanks!",
            role: {
              create: {
                name: 'Full Stack Engineer – Core',
                open: true,
                description:
                  'We are looking for a full stack software engineer to join the core team. You will collaborate with designers and other engineers to work on our core suite of products',
              },
            },
            comments: {
              create: undefined,
            },
          },
        ],
      },
    },
    {
      email: faker.internet.email(),
      name: faker.name.fullName(),
      role: ['user'],
      applications: {
        create: [
          {
            role: {
              create: {
                name: 'Full Stack Engineer – Core',
                open: true,
                description:
                  'We are looking for a full stack software engineer to join the core team. You will collaborate with designers and other engineers to work on our core suite of products',
              },
            },
            comments: {
              create: undefined,
            },
          },
          {
            role: {
              create: {
                name: 'Senior Software Engineer – Payements',
                open: true,
                description:
                  'We are looking for a senior software engineer on the payments team to lead the development of our payments platform. You will be responsible for the design and implementation of our payments platform, which is used by millions of users every day. You will be working closely with our product and engineering teams to ensure that our platform is scalable, secure, and reliable. You will also be responsible for the development of our internal tools and processes to ensure that our platform is always up to date and secure. You will be working closely with our product and engineering teams to ensure that our platform is scalable, secure, and reliable. You will also be responsible for the development of our internal tools and processes to ensure that our platform is always up to date and secure.',
              },
            },
            comments: {
              create: undefined,
            },
          },
        ],
      },
    },
    {
      email: faker.internet.email(),
      name: faker.name.fullName(),
      role: ['user'],
      applications: {
        create: [
          {
            message:
              "Hi team, I'm interested in this role. I've attached my resume and cover letter. Please let me know if you have any questions. Thanks!",
            role: {
              create: {
                name: 'Senior Software Engineer – Payements',
                open: true,
                description:
                  'We are looking for a senior software engineer on the payments team to lead the development of our payments platform. You will be responsible for the design and implementation of our payments platform, which is used by millions of users every day. You will be working closely with our product and engineering teams to ensure that our platform is scalable, secure, and reliable. You will also be responsible for the development of our internal tools and processes to ensure that our platform is always up to date and secure. You will be working closely with our product and engineering teams to ensure that our platform is scalable, secure, and reliable. You will also be responsible for the development of our internal tools and processes to ensure that our platform is always up to date and secure.',
              },
            },
            comments: {
              create: undefined,
            },
          },
        ],
      },
    },
    {
      email: faker.internet.email(),
      name: faker.name.fullName(),
      role: ['user'],
      applications: {
        create: [
          {
            message:
              "Hi team, I'm interested in this role. I've attached my resume and cover letter. Please let me know if you have any questions. Thanks!",
            role: {
              create: {
                name: 'Senior Software Engineer – Payements',
                open: true,
                description:
                  'We are looking for a senior software engineer on the payments team to lead the development of our payments platform. You will be responsible for the design and implementation of our payments platform, which is used by millions of users every day. You will be working closely with our product and engineering teams to ensure that our platform is scalable, secure, and reliable. You will also be responsible for the development of our internal tools and processes to ensure that our platform is always up to date and secure. You will be working closely with our product and engineering teams to ensure that our platform is scalable, secure, and reliable. You will also be responsible for the development of our internal tools and processes to ensure that our platform is always up to date and secure.',
              },
            },
            comments: {
              create: undefined,
            },
          },
        ],
      },
    },
    {
      email: faker.internet.email(),
      name: faker.name.fullName(),
      role: ['user'],
      applications: {
        create: [
          {
            message:
              "Hi team, I'm interested in this role. I've attached my resume and cover letter. Please let me know if you have any questions. Thanks!",
            role: {
              create: {
                name: 'Product Designer',
                open: true,
                description:
                  'We are looking for a product designer to join our team. You will be responsible for the design of our products and services. You will be working closely with our product and engineering teams to ensure that our products and services are scalable, secure, and reliable. You will also be responsible for the development of our internal tools and processes to ensure that our products and services are always up to date and secure. You will be working closely with our product and engineering teams to ensure that our products and services are scalable, secure, and reliable. You will also be responsible for the development of our internal tools and processes to ensure that our products and services are always up to date and secure.',
              },
            },
            comments: {
              create: undefined,
            },
          },
        ],
      },
    },
  ]
  try {
    users.forEach(async (user) => {
      const prisma = new PrismaClient()
      await prisma.user.create({
        data: user,
      })
      await prisma.$disconnect()
      console.log('Successfully seeded DB 😄')
    })
  } catch (e) {
    console.error(`something went wrong 🙁 ${JSON.stringify(e)}`)
  }
}
main().then().catch()
