# Backend Setup: Fastify + Prisma + NeonDB

## Steps
1. Copy `.env.example` to `.env` and add your NeonDB connection string.
2. Run Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```
3. Start the server:
   ```bash
   npm run start
   ```

## Files
- `src/server.ts`: Fastify server with Prisma connection
- `prisma/schema.prisma`: Minimal Prisma schema
- `.env.example`: Environment variable template
