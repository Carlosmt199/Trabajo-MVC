import pool from '../db/index.js';

export const getTask = async () => {
    const result = await pool.query(`
       SELECT * FROM tasks `);

    if (result.rows.length === 0) {
        throw new Error("task not found");
    }

    return result.rows;

    
};

export const createTask = async (taskData) => {
    const {title, description, status} = taskData;
    const result = await pool.quert(
        `INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3) RETURNING *`,
        [title, description, status]
    );
    return result.rows[0];
};

export const updateTask = async (id, taskData) => {
    const {title, description, status} = taskData;
    const result = await pool.query(
    `UPDATE tasks SET 
    title = COALESCE(NULLIF($1, ''), title),
    description = COALESCE(NULLIF($2, ''), description),
    status = COALESCE(NULLIF($3, ''), status)
    WHERE id = $4 RETURNING *`,
    [title, description, status, id]
    );
    if (result.rows.length === 0) {
        throw new Error ("task not found");

    }
    return result.rows[0];
}

export const deleteTask = async (id) => {
    const result = await pool.query(
        `DELETE FROM tasks WHERE id = $1`,
        [id]
    );
    if (result.rows.length === 0) {
    throw new Error("task not found");
    }
    return result.rows[0];
}

