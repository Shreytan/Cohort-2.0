import { Client } from 'pg';

const client = new Client({
  connectionString:
    'postgresql://neondb_owner:npg_6d3EGkFLNVaX@ep-gentle-sun-a4i5uiki-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require',
});

async function insertUser() {
  try {
    await client.connect();

    const result = await client.query(
      `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *;`,
      ['username2', 'user3@example.com', 'user_password']
    );

    console.log('Insertion successful:', result.rows[0]);
  } catch (err) {
    console.error('Error during insertion:', err.message);
  } finally {
    await client.end();
  }
}

insertUser();
