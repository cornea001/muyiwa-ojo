import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextResponse, type NextRequest } from 'next/server'

const intlMiddleware = createMiddleware(routing)

export default function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname
  const isAdminRoute = pathname.includes('/admin')
  const isLoginRoute = pathname.endsWith('/login')

  // Protect admin routes
  if (isAdminRoute && !isLoginRoute) {
    const sessionCookie = req.cookies.get('admin_session')
    if (!sessionCookie) {
      // Redirect to login, maintaining the locale prefix if it exists
      const locale = pathname.startsWith('/fr') ? '/fr' : '/en'
      return NextResponse.redirect(new URL(`${locale}/admin/login`, req.url))
    }
  }

  // Pass to next-intl middleware for all routes
  return intlMiddleware(req)
}

export const config = {
  // Match only internationalized pathnames, exclude /og
  matcher: ['/', '/(fr|en)/:path*', '/((?!api|_next|_vercel|og|.*\\..*).*)']
}
