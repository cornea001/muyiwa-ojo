'use server'

import { cookies } from 'next/headers'
import bcrypt from 'bcryptjs'

const COOKIE_NAME = 'admin_session'

export async function login(password: string) {
  const hash = process.env.ADMIN_PASSWORD_HASH
  
  if (!hash) {
    return { error: 'Server misconfiguration: ADMIN_PASSWORD_HASH is not set' }
  }

  const isValid = bcrypt.compareSync(password, hash)

  if (isValid) {
    // Generate a simple session token (since it's a single admin, we just use a hashed/static marker for simplicity, 
    // but a random string is better to prevent forgery).
    const sessionToken = Math.random().toString(36).substring(2) + Date.now().toString(36)
    
    // Set HTTP-only cookie
    cookies().set({
      name: COOKIE_NAME,
      value: sessionToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    })
    
    return { success: true }
  }

  return { error: 'Invalid password' }
}

export async function logout() {
  cookies().delete(COOKIE_NAME)
  return { success: true }
}

// Utility to check session server-side in pages
export async function isAuthenticated() {
  return cookies().has(COOKIE_NAME)
}
