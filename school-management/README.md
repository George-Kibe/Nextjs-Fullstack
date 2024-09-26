## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Prisma Configuration
To initialize prisma
```npx prisma init```

Create models in the created file ```schema.prisma```

## Learn More

1. Setup a postgres database using docker 
2. Set environment variable for the postgres url
3. Run Migrations ```npx prisma migrate dev --name initial migration```
4. Optionally, you view the prisma studio ```npx prisma studio```
5. Optionally, you can seed the database with dummy data ```npx prisma migrate reset```  or ```npx prisma db seed```.  PS: Must add seed data in the seed.ts file


## Prisma documentation for Postgres
Checkout [Prisma documentation with Postgres](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/using-prisma-migrate-typescript-postgresql) for more details.

## Resetting the database
```npx prisma db push --force-reset```