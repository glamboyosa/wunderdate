# WunderDate WunderGraph Demo 🌜

WunderDate is a candidate management web application that demos how easy it is to integrate WunderGraph into your real-world applications. It shows off core WunderGraph features like:

- Unifying APIs
- Authentication (via GitHub)
- Authorization (Role Based Access Control)
- Hooks
- Adding real-time capabilities to an existing API with live-querying eliminating the need for GraphQL subscriptions or websockets.

## Features

- Shows open applications.
- Fetches single application.
- Fetch available positions.
- Fetch applications by position ID.
- Accept or reject an application.
- Leave comments on an application (real-time).

## Stack

![WunderDate Stack](./assets/stack.png)

## Architecture

![WunderDate Architecture](./assets/architecture.png)

This application has three services:

- GQL: This is a TypeGraphQL server responsible for the commenting functionality.
- Nexus: This is a Nexus GraphQL server responsible for the applications and positions functionality.
- Wunder: The app relies on WunderGraphs built-in authentication mechanism to handle authenication and authorization.

It uses PostgreSQL via Prisma as it's DB. Hosted on [railway](https://railway.app).

## Tables / Relationships

A rough outline of the relationships looks like:

![WunderDate Tables](./assets/tables.png)

Head over to the [schema]() to see how the tables are modeled.

## Getting started with the app

In order to get started this app has a few requirements:

- WunderGraph CLI.
- A GitHub OAuth application.

> _NOTE_ This demo uses npm.

### Installing the WunderGraph CLI

```bash
npm install -g @wundergraph/wunderctl
```

### Registering a GitHub OAuth Application

Please follow the [official GitHub guide](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) to properly configure an OAuth application.

> _NOTE_ For the authorization callback URL add: `http://localhost:9991/app/main/auth/cookie/callback/github` . This is necessary for WunderGraph to be able to authenticate successfully. Else, an error will occur.

### Environment Variables

This app has a couple environment variables required. Run the following command to generate your .env file.

```bash
cp .env.example .env
# or windows
copy .env.example .env
```

Fill in `GITHUB_CLIENT_SECRET` and `GITHUB_CLIENT_ID` with the values from the previous [section](https://github.com/glamboyosa/wunderdate)

`DATABASE_URL` will be used by Prisma as the database to read and write to. You can use your local database e.g. `"postgresql://admin:admin@localhost:54322/example?schema=public"` or you can use a serverless Postgres provider like [railway](https://railway.app)

> _NOTE_ If you do use a local Postgres DB PLEASE ensure to create the database as Prisma expects that.

## Installing dependencies

To install dependencies, run the following from the terminal:

```bash
npm run install:deps
```

This will install dependencies for all services.

## Migrating tables and seeding DB

The next step is to migrate our tables and seed the DB with some data. For this, in your terminal, run:

```bash
npm run migrate:seed
```

> _NOTE_ If you would like to drop all tables, migrate and seed. Run: `npm run reset:seed` but this requires having run an initial migration.

## Run the GraphQL services

The next step is to start our two GraphQL servers. In your terminal, run the following script:

```bash
npm run dev:graphdeps
```

This will concurrently start both servers.

## Generate WunderGraph components and start app

The next step is to generate our WunderGraph components key for both `wunder` and `frontend` and start the server and the frontend.
In your terminal, run the following script:

```bash
npm run dev:stack
```

This will generate the relevant folders and concurrently start the WunderGraph API and frontend.
