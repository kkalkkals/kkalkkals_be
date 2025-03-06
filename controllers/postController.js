import { insertPost } from "../models/postModel.js";

export async function addPost(req, res) {
  const { trash_type, trash_amount, address, request_term, money } = req.body;
  const image = req.file.path;

  if (!trash_type || !trash_amount || !address || !money || !image) {
    return res.status(400).json({ message: "필수안보냄" });
  }

  try {
    const postId = await insertPost({
      trash_type,
      trash_amount,
      address,
      request_term,
      image,
      money,
    });

    return res.status(201).json({
      message: "새 건 추가 완",
      postId: postId,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "서버 오류 발생" });
  }
}
