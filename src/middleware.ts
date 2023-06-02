// middleware.ts
import { IMEstudianteRes } from '@/interfaces/Entities'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

const baseURL = '/api/ema/V1'

const valideteStudentRoutes = (pathname: string) =>
  pathname === `${baseURL}/Especialidad` ||
  pathname === `${baseURL}/Genero` ||
  pathname === `${baseURL}/Inteligencia` ||
  pathname === `${baseURL}/Semestre`

export default withAuth(
  async function middleware(req) {
    console.log(
      '----------------------------------------middleware----------------------------------------'
    )
    const {
      method,
      nextUrl: { pathname }
    } = req
    console.log(req.nextauth)

    // const token = req.cookies.get('next-auth.session-token')

    // if (pathname.startsWith('/api/ema') && !token) {
    //   if (method === 'GET' && valideteStudentRoutes(pathname)) {
    //     NextResponse.redirect(new URL('/api/Unauthorized', req.url))
    //     return NextResponse.next()
    //   }
    //   console.log(
    //     '------------------------No autorizado------------------------'
    //   )

    //   return NextResponse.redirect(new URL('/api/Unauthorized', req.url))
    // }
    // if (!token) return NextResponse.redirect(new URL('/', req.url))

    // Se protegen las rutas para que los usuarios no logueados las puedan consular

    // const session = req.cookies.get('next-auth.session-token');

    // if (pathname.startsWith('/api/ema') && !session) {
    //   const baseURL = '/api/ema/V1';
    //   if (
    //     method === 'GET' &&
    //     (pathname === `${baseURL}/Especialidad` ||
    //       pathname === `${baseURL}/Genero` ||
    //       pathname === `${baseURL}/Inteligencia` ||
    //       pathname === `${baseURL}/Semestre`)
    //   ) {
    //     return NextResponse.next();
    //   }
    //   console.log(
    //     '------------------------No autorizado------------------------'
    //   );

    //   return NextResponse.redirect(new URL('/api/Unauthorized', req.url));
    // }

    // // Se protegen las rutas para que solo los usuarios logeados las puedan consultar

    // // Si no te haz logueado te regresa a la pagina principal

    // if (!session) return NextResponse.redirect(new URL('/', req.url));

    // // Obtenemos el payload del token

    // // Si no se cumple ninguna de las condiciones anteriores continua tu comportamiento por defecto
    // return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
      //
    }
  }
)

// See "Matching Paths" below to learn more
export const config = {
  // '/api/ema/:path*'
  matcher: ['/student/:path*', '/admin/:path*']
}

// export async function middleware(request: NextRequest): Promise<NextResponse> {
//   const { method, nextUrl } = request;
//   const { pathname } = nextUrl;

//   console.log({ method, pathname });

//   const jwt = request.cookies.get('Authorization');
//   console.log({ jwt });

//   // Se protegen las rutas para que los usuarios no logueados las puedan consular
//   if (pathname.startsWith('/api/ema') && jwt === undefined) {
//     const baseURL = '/api/ema/V1';
//     if (
//       method === 'GET' &&
//       (pathname === `${baseURL}/Especialidad` ||
//         pathname === `${baseURL}/Genero` ||
//         pathname === `${baseURL}/Inteligencia` ||
//         pathname === `${baseURL}/Semestre`)
//     ) {
//       return NextResponse.next();
//     }
//     console.log(
//       '------------------------No autorizado------------------------'
//     );

//     return NextResponse.redirect(new URL('/api/Unauthorized', request.url));
//   }

//   // Se protegen las rutas para que solo los usuarios logeados las puedan consultar

//   // Si no te haz logueado te regresa a la pagina principal

//   if (!jwt) return NextResponse.redirect(new URL('/', request.url));

//   try {
//     // Obtenemos el payload del token
//     const { payload } = await jwtVerify(
//       jwt,
//       new TextEncoder().encode(process.env.JWT_SECRET_SEED)
//     );

//     console.log({ payload });

//     // Obtenemos los datos que nos interesan de la sesion
//     const { rol: id_rol } = payload;

//     if (pathname.startsWith('/api/ema')) {
//       console.log('------------------------Api page------------------------');

//       // Se protegen las rutas para que solo los usuarios con el rol de administrador puedan consultarlas
//       if (id_rol !== 1 && method !== 'GET')
//         return NextResponse.redirect(new URL('/api/Unauthorized', request.url));
//       return NextResponse.next();
//     }
//     console.log({ payload });

//     // Si no se cumple ninguna de las condiciones anteriores continua tu comportamiento por defecto
//     return NextResponse.next();
//   } catch (error) {
//     console.log({ error });
//     return NextResponse.redirect(new URL('/', request.url));
//   }
// }
