import pool from "../config/db.js";

export const updatePostStatus = async (postId) => {
  try {
    const [result] = await pool.query(
      `
            UPDATE post
            SET status = CASE 
                            WHEN status = 0 THEN 1
                            WHEN status = 1 THEN 2
                            ELSE status
                        END
            WHERE post_id = ?;
        `,
      [postId]
    );

    return result;
  } catch (error) {
    console.error("status update model error:", error);
    throw error;
  }
};

export const getAllPosts = async (sort, limit, offset) => {
  try {
    const order = sort === "old" ? "ASC" : "DESC";
    const [posts] = await pool.query(`
            SELECT *
            FROM post
            ORDER BY date ${order}
        `);

    return posts;
  } catch (error) {
    console.error("model error");
  }
};

export const getActivePosts = async (sort, limit, offset) => {
  try {
    const order = sort === "old" ? "ASC" : "DESC";
    const [posts] = await pool.query(
      `
            SELECT *
            FROM post
            WHERE status != 3
            ORDER BY date ${order}
            LIMIT ? OFFSET ?;
        `,
      [limit, offset]
    );

    return posts;
  } catch (error) {
    console.error("model error");
  }
};
