import { insertPost } from "../models/postModel.js";
import axios from "axios";

export async function addPost(req, res) {
  const { trash_type, trash_amount, address, request_term, money } = req.body;
  const image = req.file.path;

  if (!trash_type || !trash_amount || !address || !money || !image) {
    return res.status(400).json({ message: "필수안보냄" });
  }

  try {
    // 주소를 위도, 경도로 변환 (카카오 API 사용)
    const kakaoApiKey = process.env.KAKAO_REST_API_KEY;  // .env에서 API Key 가져오기
    const geoRes = await axios.get(`https://dapi.kakao.com/v2/local/search/address.json`, {
      headers: { Authorization: `KakaoAK ${kakaoApiKey}` },
      params: { query: address },
    });

    if (!geoRes.data.documents.length) {
      return res.status(400).json({ message: "주소를 찾을 수 없습니다." });
    }

    const { x: longitude, y: latitude } = geoRes.data.documents[0];


    const postId = await insertPost({
      trash_type,
      trash_amount,
      address,
      latitude,
      longitude,
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
