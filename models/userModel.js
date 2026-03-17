import pool from '../db/index.js';

export const createUser = async (userData) => {
    const {name, email, password} = userData;
    const result = await pool.query(
        `INSERT INTO users (name, email, password) 
        VALUES ($1, $2, $3)
        RETURNING name`,
        [name, email, password]
    );
    return result.rows[0];

};