import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isDashboardRoute = createRouteMatcher(['/dashboard(.*)'])
const isTutorialRoute = createRouteMatcher(['/tutorial(.*)'])

export default clerkMiddleware((auth, req) => {
  // Restrict tutorial route to users with specific role
  if (isTutorialRoute(req)) auth().protect()

  // Restrict dashboard routes to signed in users
  if (isDashboardRoute(req)) auth().protect()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
