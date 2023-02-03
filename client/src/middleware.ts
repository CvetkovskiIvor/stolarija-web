import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  // If the request is for the `/about` page, rewrite it to `/home`
  if (request.nextUrl.pathname.toString() === '/about') {
    return NextResponse.redirect(new URL('/home', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}