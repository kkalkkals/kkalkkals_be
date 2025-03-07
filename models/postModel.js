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
    "INSERT INTO post (trash_type,trash_amount,address,request_term,image,status,date,money) VALUES (?,?,?,?,?,?,?,?)",
    [
      trash_type,
      trash_amount,
      address,
      request_term,
      image,
      0,
      new Date(),
      money,
    ]
  );

  return result.insertId;
};
