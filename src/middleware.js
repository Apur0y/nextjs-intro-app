import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const data ={
        role: "admin",
        email:"test@admin.com"
    }

    let isServicePage = request.nextUrl.pathname.startsWith("/services");
      let isAdmin = data.role == "admin"

    if(isServicePage && !isAdmin) {

        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()


}
 
// See "Matching Paths" below to learn more
