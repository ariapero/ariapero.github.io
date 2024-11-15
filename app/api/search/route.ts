import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  const searchIndex = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'public', 'search-index.json'), 'utf8')
  );

  const results = searchIndex.filter((page: any) =>
    page.content.toLowerCase().includes(query.toLowerCase()) ||
    page.title.toLowerCase().includes(query.toLowerCase())
  );

  return NextResponse.json({ results });
}