import dotenv from 'dotenv'
dotenv.config();

import pg from 'pg'

const { Pool } = pg;

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
};

console.log('Config DB:', { ...config, password: '****' });

const pool = new Pool(config);

export const connectDB = async () => {
    try {
        const client = await pool.connect();
        console.log('PostgreSQL Conectado!');
        client.release();
    } catch (error) {
        console.error("Error Conectandose a PostgreSQL!");
        console.error(error.message);
        process.exit(1);
    }
};

export default pool;
