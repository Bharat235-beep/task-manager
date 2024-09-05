import { NextResponse } from 'next/server'
// This function can be marked `async` if using `await` inside
export  function middleware(request) {
    const {pathname}=request.nextUrl
    console.log('Middlware hitted',request.url)
    console.log(request.cookies.has('task-manager'))
   
    
    if(!request.cookies.has('task-manager')){
        if(pathname==='/login' || pathname==='/create-account'){
            return
        }
            return NextResponse.redirect(new URL('/login', request.url))
    }
else{
     if((pathname==='/login'||pathname==='/create-account')){
                  return NextResponse.redirect(new URL('/', request.url))
              } 
}
    //   if(request.cookies.has('task-manager')){
    //         // if(!(pathname==='/login'||pathname==='/create-account')){
    //         //     return NextResponse.redirect(new URL('/', request.url))

    //         // }
    //      return NextResponse.redirect(new URL('/', request.url))
    //     }
    
//    return NextResponse.redirect(new URL('/', request.url))
}
 
export const config = {
//   matcher: '/api/users/:path*',
  matcher: ['/','/add-task','/login','/create-account','/show-tasks'],
}