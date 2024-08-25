import { db } from '@vercel/postgres';
import { users, posts } from '../lib/placeholder-data';

async function seedUsers(client) {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

    await client.sql`
    CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL -- Increased length for hashed passwords
    );`;

    const insertUsers = await Promise.all(
        users.map(async (user) => {
            try {
                return client.sql`
                INSERT INTO users (id, username, email, password)
                VALUES (${user.id}, ${user.username}, ${user.email}, ${user.password})
                ON CONFLICT (id) DO NOTHING;`; // Handle conflicts to avoid errors
            } catch (err) {
                console.error(`Error inserting user: ${user.id}`, err); // Log errors for debugging
            }
        })
    );

    return insertUsers;
}

export async function GET() {
    const client = await db.connect(); // Initialize client inside the async function

    try {
        await client.sql`BEGIN`;
        await seedUsers(client);
        await client.sql`COMMIT`;

        return new Response(JSON.stringify({ message: 'Database seeded successfully' }), { status: 200 }); // Correct use of Response
    } catch (err) {
        await client.sql`ROLLBACK`;
        console.error('Transaction failed', err); // Log the error for debugging
        return new Response(JSON.stringify({ err: err.message }), { status: 500 });
    } finally {
        client.release(); // Ensure the client is released after use
    }
}
