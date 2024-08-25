// "use client";  // Mark the component as a Client Component

// import { useEffect, useState } from 'react';
// import PostContainer from "./posts/postContainer";
// import { fetchUsers, Users } from '../lib/data'; // TODO: Need to debug this Users error here

// export default function PostLayout() {
//     // 1. Correct the state setter function name and ensure correct state initialization
//     const [users, setUsers] = useState<Users[]>([]);  // Fixed typo: setUSers -> setUsers

//     // 2. Use useEffect to fetch users on component mount
//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const userData = await fetchUsers();  // Fetch users from the server
//                 setUsers(userData);  // Correctly set the state with fetched data
//             } catch (err) {
//                 console.error('Error fetching users in PostLayout: ', err);  // Proper error logging
//             }
//         }

//         fetchData();  // Trigger the data fetch
//     }, []);  // Empty dependency array ensures this effect runs once on mount

//     // 3. Render the users list
//     return (
//         <div>
//             <h1>User List</h1>
//             <ul>
//                 {users.map((user) => (  // TODO: Failing to fetch users from data.ts in lib folder
//                     <li key={user.id}>
//                         {user.username} ({user.email})
//                     </li>
//                 ))}
//             </ul>
//             <PostContainer />
//         </div>
//     );
// }

import { fetchUsers } from "@/app/lib/data";
import PostContainer from "@/app/ui/posts/postContainer";;

export default async function PostLayout() {
    const users = await fetchUsers();
    console.log("PostLayout users: ", users);
    
    return (
        <div>
            <PostContainer />
            {/* Render users list */}
            <div>
                <h1>User List</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.username} ({user.email})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}