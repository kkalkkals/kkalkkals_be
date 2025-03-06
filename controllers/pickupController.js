import {
  getActivePosts,
  getAllPosts,
  updatePostStatus,
} from "../models/pickupModel.js";

export const updatePostStatusController = async (req, res) => {
  try {
    const { postId } = req.params;

    const result = await updatePostStatus(postId);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    }

    res.status(200).json({
      message: "배출대행 상태 업데이트 성공",
    });
  } catch (error) {
    console.error("배출대행 상태 업데이트 실패");
    return res.status(500).json({ message: "서버 에러 발생" });
  }
};

export const getAllPostsController = async (req, res) => {
  try {
    const { sort = "new" } = req.query;

    const posts = await getAllPosts(sort);

    res.status(200).json({
      message: "모든 배출대행목록 가져오기 성공",
      data: posts,
    });
  } catch (error) {
    console.error("배출대행목록 가져오기 실패");
    return res.status(500).json({ message: "서버 에러 발생" });
  }
};

export const getActivePostsController = async (req, res) => {
  try {
    const { sort = "new", page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const posts = await getActivePosts(sort, parseInt(limit), parseInt(offset));

    res.status(200).json({
      message: "완료된 건을 제외한 배출대행목록 가져오기 성공",
      data: posts,
    });
  } catch (error) {
    console.error("배출대행목록 가져오기 실패");
    return res.status(500).json({ message: "서버 에러 발생" });
  }
};
