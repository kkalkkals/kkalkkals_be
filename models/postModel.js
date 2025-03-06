import pool from "../config/db.js";

export const insertPost = async ({
  trash_type,
  trash_amount,
  address,
  request_term,
  image,
  money,
}) => {
  const [result] = await pool.query(
    "INSERT INTO post (trash_type, trash_amount, address, latitude, longitude, request_term, image, status, date, money) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      trash_type,
      trash_amount,
      address,
      latitude,
      longitude,
      request_term,
      image,
      0,
      money,
    ]
  );

  return result.insertId;
};
