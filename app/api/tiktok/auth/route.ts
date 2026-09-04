import { NextResponse } from 'next/server';
import crypto from 'crypto';

function base64url(input: Buffer) {
  return input.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export async function GET() {
  const clientKey = process.env.TIKTOK_CLIENT_KEY;
  const redirectUri = process.env.TIKTOK_REDIRECT_URI || 'http://localhost:3000/api/tiktok/callback';

  // Gera o par PKCE
  const codeVerifier = base64url(crypto.randomBytes(32));
  const codeChallenge = base64url(crypto.createHash('sha256').update(codeVerifier).digest());

  const authUrl = new URL('https://www.tiktok.com/v2/auth/authorize/');
  authUrl.searchParams.set('client_key', clientKey!);
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('scope', 'user.info.basic,video.list');
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('state', 'setup');
  authUrl.searchParams.set('code_challenge', codeChallenge);
  authUrl.searchParams.set('code_challenge_method', 'S256');

  const response = NextResponse.redirect(authUrl.toString());
  // Guarda o code_verifier num cookie temporário, só pra usar na próxima etapa
  response.cookies.set('tiktok_code_verifier', codeVerifier, {
    httpOnly: true,
    maxAge: 600, // 10 minutos, tempo suficiente pra fazer login
    path: '/',
  });

  return response;
}