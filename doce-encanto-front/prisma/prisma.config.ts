<<<<<<< HEAD
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
=======
import { defineConfig } from "@prisma/internals";

export default defineConfig({
>>>>>>> b244b31ade9c32d6be3d2f288beacf4db4283668
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});
<<<<<<< HEAD

export default prisma;
=======
>>>>>>> b244b31ade9c32d6be3d2f288beacf4db4283668
