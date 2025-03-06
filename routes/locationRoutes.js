import express from "express";
import { getCleanhouseController, getRecycleCenterController, getLocationsByBounds } from "../controllers/locationController.js";

const router = express.Router();

// 클린하우스 조회 API
router.get("/cleanhouse", getCleanhouseController);

// 재활용 도움센터 조회 API
router.get("/recycle-center", getRecycleCenterController);

// 특정 지도 영역 내 시설 조회 API (지도 이동 시)
router.get("/bounds", getLocationsByBounds);

export default router;