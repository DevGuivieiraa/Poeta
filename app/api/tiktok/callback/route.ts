import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');
  const error = request.nextUrl.searchParams.get('error');
  const codeVerifier = request.cookies.get('tiktok_code_verifier')?.value;

  if (error || !code) {
    return NextResponse.json({ error: 'Autorização negada ou código ausente.' }, { status: 400 });
  }

  if (!codeVerifier) {
    return NextResponse.json({ error: 'code_verifier não encontrado. Tente o login novamente desde o início (/api/tiktok/auth).' }, { status: 400 });
  }

  const redirectUri = process.env.TIKTOK_REDIRECT_URI || 'http://localhost:3000/api/tiktok/callback';

  const tokenRes = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_key: process.env.TIKTOK_CLIENT_KEY!,
      client_secret: process.env.TIKTOK_CLIENT_SECRET!,
      code,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }),
  });

  const data = await tokenRes.json();
  return NextResponse.json(data);
}