// postgresql://neondb_owner:npg_6d3EGkFLNVaX@ep-gentle-sun-a4i5uiki-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require

import { Client } from "pg";

// import { Client } from 'pg'

// const client = new Client({
//   host: 'my.database-server.com',
//   port: 5334,
//   database: 'database-name',
//   user: 'database-user',
//   password: 'secretpassword!!',
// })

// client.connect()

// import { Client } from 'pg';

// const client = new Client({
//   host: 'ep-gentle-sun-a4i5uiki-pooler.us-east-1.aws.neon.tech',
//   port: 5432, // Default port for PostgreSQL
//   database: 'neondb',
//   user: 'neondb_owner',
//   password: 'npg_6d3EGkFLNVaX',
//   ssl: {
//     rejectUnauthorized: false // Matches sslmode=require
//   }
// });

// client.connect();

// import { Client } from 'pg';

// const client = new Client({
//   connectionString: 'postgresql://neondb_owner:npg_6d3EGkFLNVaX@ep-gentle-sun-a4i5uiki-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require',
// });


// // async function creatingTable() {
// //   await client.connect();
// //   const result = await client.query(CREATE TABLE users (
// //     id SERIAL PRIMARY KEY,
// //     username VARCHAR(50) UNIQUE NOT NULL,
// //     email VARCHAR(255) UNIQUE NOT NULL,
// //     password VARCHAR(255) NOT NULL,
// //     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// // );)

// //    console.log(result);
// // }

// // creatingTable();

// async function Insertion(){
//     await client.connect();
//     const q = "INSERT INTO users "
//     try{
//       const result = await client.query(`INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');`);
      
//       console.log(result);
//     }
//     catch(err){
//       console.log("error during insertion",err);
//     }

//     finally{
//       await client.end();
//     }
// }

// Insertion(); 



// import { Client } from 'pg';

// // Async function to insert data into a table
// async function insertData(username: string, email: string, password: string) {
//   const client = new Client({
//     connectionString : "postgresql://neondb_owner:npg_6d3EGkFLNVaX@ep-gentle-sun-a4i5uiki-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"
//   });

//   try {
//     await client.connect(); // Ensure client connection is established
//     // Use parameterized query to prevent SQL injection
//     const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
//     const values = [username, email, password];
//     const res = await client.query(insertQuery, values);
//     console.log('Insertion success:', res); // Output insertion result
//   } catch (err) {
//     console.error('Error during the insertion:', err);
//   } finally {
//     await client.end(); // Close the client connection
//   }
// }

// // Example usage
// insertData('username5', 'user5@example.com', 'user_password').catch(console.error);


async function ShowUsers(email:string){
  const client = new Client({
    connectionString:"postgresql://neondb_owner:npg_6d3EGkFLNVaX@ep-gentle-sun-a4i5uiki-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"
  })

  try{
    await client.connect();
    const query = "SELECT * FROM users where email = $1";
    const result = client.query(query,[email]);
    console.log(result);
  }

  catch (err){
    console.log(err);
  }
  finally{
    await client.end();
  }
}