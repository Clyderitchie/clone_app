import { sql } from '@vercel/postgres';
import { Users } from './definitions'; // Make sure this file correctly exports a `Users` type or interface

export async function fetchUsers() {
    try {
        // Fetch data from the users table
        const data = await sql<Users[]>`SELECT id, username, email, password FROM users;`;

        // Log the raw data fetched from the database
        console.log('Fetched data:', data);

        // Extract rows from the fetched data
        const users = data.rows;

        // Log the rows extracted for clarity
        console.log('Fetched users:', users);

        return users;
    } catch (err) {
        // Log the error details if fetching fails
        console.error('Database fetchUsers Error:', err);
        throw new Error('Failed to fetch users from fetchUsers in lib/data.ts');
    }
}

// Call the function to test it and log the results
fetchUsers()
    .then((users) => console.log('Users:', users)) // This is working on terminal in vscode
    .catch((error) => console.error('Error fetching users:', error));
