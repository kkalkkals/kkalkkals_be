import pool from "../config/db.js"

export const getAllPosts = async(sort, limit, offset) => {
    try {
        const order = sort === 'old' ? 'ASC' : 'DESC';
        const [posts] = await pool.query(`
            SELECT *
            FROM post
            ORDER BY date ${order}
            LIMIT ? OFFSET ?;
        `, [limit, offset]);

        return posts;

    } catch (error) {
        console.error("model error");
    }
}

export const getActivePosts = async (sort, limit, offset) => {
    try {
        const order = sort === 'old' ? 'ASC' : 'DESC';
        const [posts] = await pool.query(`
            SELECT *
            FROM post
            WHERE status != 3
            ORDER BY date ${order}
            LIMIT ? OFFSET ?;
        `, [limit, offset]);

        return posts;

    } catch (error) {
        console.error("model error");
    }
}
