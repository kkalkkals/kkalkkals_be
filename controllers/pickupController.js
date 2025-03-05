import { getActivePosts, getAllPosts } from "../models/pickupModel.js";

export const getAllPostsController = async(req, res) => {
    try{
        const { sort = 'new', page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;

        const posts = await getAllPosts(sort, parseInt(limit), parseInt(offset));

        res.status(200).json({
            message: "모든 배출대행목록 가져오기 성공",
            data: posts
        });

    }catch(error){
        console.error("배출대행목록 가져오기 실패");
        return res.status(500).json({ message: "서버 에러 발생"});
    }
}

export const getActivePostsController = async(req, res) => {
    try{
        const { sort = 'new', page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;

        const posts = await getActivePosts(sort, parseInt(limit), parseInt(offset));

        res.status(200).json({
            message: "완료된 건을 제외한 배출대행목록 가져오기 성공",
            data: posts
        });

    }catch(error){
        console.error("배출대행목록 가져오기 실패");
        return res.status(500).json({ message: "서버 에러 발생"});
    }

}