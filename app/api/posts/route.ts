import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/blog';

export async function GET() {
  try {
    const posts = await getAllPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return NextResponse.json([], { status: 500 });
  }
}
