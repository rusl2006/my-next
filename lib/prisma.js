// lib/prisma.js

import { PrismaClient } from '@prisma/client';

// В Next.js нужно кешировать PrismaClient в глобальном объекте, 
// чтобы избежать слишком большого количества подключений к базе данных

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // @ts-ignore
  if (!global.prisma) {
    // @ts-ignore
    global.prisma = new PrismaClient();
  }
  // @ts-ignore
  prisma = global.prisma;
}

export default prisma;