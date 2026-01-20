import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const fastify = Fastify({ logger: true });

// Create PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create Prisma adapter
const adapter = new PrismaPg(pool);

// Initialize Prisma Client with adapter
const prisma = new PrismaClient({ adapter });

fastify.get('/', async (request, reply) => {
  return { status: 'Server is running' };
});

async function main() {
  try {
    await prisma.$connect();
    console.log('Prisma connected to NeonDB!');
    await fastify.listen({ port: 3002, host: '0.0.0.0' });
  } catch (err) {
    console.error('Error connecting to NeonDB:', err);
    process.exit(1);
  }
}

main();
