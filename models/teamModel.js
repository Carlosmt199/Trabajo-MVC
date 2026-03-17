import pool from '../db/index.js';

export const getTeams = async () => {
    const result = await pool.query(`
        SELECT * from teams `);

    if (result.rows.length === 0) {
        throw new Error("teams not found");
    }

    return result.rows;
};

export const createTeams = async (teamsData) => {
    const {name} = teamsData;
    const result = await pool.query(`
        INSERT INTO teams (name) VALUES ($1) RETURNING *`,
        [name]
    );

    return result.rows[0];
};