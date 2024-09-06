import { NextResponse } from 'next/server'

export async function middleware(request) {
    const {pathname}=request.nextUrl
    console.log('Middlware hitted',request.url)
    console.log(request.cookies.has('task-manager'))
   let isPublicUrl=pathname==='/login'||pathname==='/create-account'
    let isAuthenticated=await request.cookies.has('task-manager')
  if(!isAuthenticated && !isPublicUrl){
    return NextResponse.redirect(new URL('/login', request.url))
  }
  if(isAuthenticated && isPublicUrl){
    return NextResponse.redirect(new URL('/', request.url))
  }
  
}
 
export const config = {
//   matcher: '/api/users/:path*',
  matcher: ['/','/add-task','/login','/create-account','/show-tasks'],
}