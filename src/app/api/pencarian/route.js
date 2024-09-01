import { NextResponse } from 'next/server';

export async function GET(request) {
  const query = new URL(request.url).searchParams.get('q') || '';
  const type = new URL(request.url).searchParams.get('type') || 'pt'; 
  const apiUrl = process.env.NEXT_PUBLIC_API_URL; 

  
  const url = `${apiUrl}/${type}/${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch data' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
