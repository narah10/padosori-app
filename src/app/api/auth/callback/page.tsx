'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

// export default function ProfileClient() {
//   const { user, error, isLoading } = useUser();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;
//   console.log(user)
// //   return (
// //     user && (
// //       <div>
// //         <h2 className='text-black'>{user.name}</h2>
// //         <p className='text-black'>{user.email}</p>
// //       </div>
// //     )
// //     <a className='text-black' href="/api/auth/login">Logout</a>
// //   );
// if (user) {
//     return (
//         <div>Welcome {user.name}! <a href="/api/auth/logout">Logout</a></div>
//     )
// }
// return <a href="/api/auth/login">LogIn</a>
// }

export default function Callback(){
  return(
    <main>
    <h1>Welcome!</h1>
    <Link href="/api/auth/logout?federated">Log Out</Link>
    </main>
  )
}