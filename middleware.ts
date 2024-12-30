import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { getUser, isUserLoginCompleted } from "./services/user";
import { NextResponse } from "next/server";
import { isBarber } from "./services/barber";

// Define public routes that don't require authentication
const publicRoutes = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks(.*)",
  "/studio(.*)",
  "/",
  "/new-user",
]);

export default clerkMiddleware(async (auth, req) => {
  if (publicRoutes(req)) {
    return NextResponse.next();
  }
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  const isLoginCompleted = await isUserLoginCompleted(userId);
  if (!isLoginCompleted) {
    return NextResponse.redirect(new URL("/new-user", req.url));
  }
  const user = await getUser(userId);
  const userEmail = user?.email;
  if (!userEmail) {
    return NextResponse.next();
  }
  
  const isUserAbarber = await isBarber(userEmail);
  if (isUserAbarber && req.nextUrl.pathname.startsWith("/book")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
 

  return NextResponse.next();
});

// Simplified matcher configuration
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
    "/api/:path*",
  ],
};
