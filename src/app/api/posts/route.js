// src/app/api/posts/route.js

import prisma from '@/lib/prisma'; // Импортируем наш настроенный Prisma Client
import { NextResponse } from 'next/server'; // Наш инструмент для отправки ответов

/**
 * @name GET /api/posts
 * @description Чтение (Read): Получить все посты из базы данных.
 */
export async function GET() {
  try {
    // 1. Prisma: Использование findMany() для получения всех записей из таблицы Post
    const posts = await prisma.post.findMany({
      // Можешь добавить сортировку, например, по дате создания
      orderBy: {
        createdAt: 'desc', 
      },
    });

    // 2. NextResponse: Отправляем успешный ответ (200 OK) с данными в формате JSON
    return NextResponse.json(posts, { status: 200 });

  } catch (error) {
    console.error('Ошибка при получении постов:', error);
    
    // 3. NextResponse: Отправляем ошибку сервера (500 Internal Server Error)
    return NextResponse.json(
      { error: 'Не удалось получить данные о постах.' },
      { status: 500 }
    );
  }
}