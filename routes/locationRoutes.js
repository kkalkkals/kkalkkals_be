import express from "express";
import { getCleanhouseController, getRecycleCenterController } from "../controllers/locationController.js";

const router = express.Router();

// 클린하우스 조회 API
router.get("/cleanhouse", getCleanhouseController);

// 재활용 도움센터 조회 API
router.get("/recycle-center", getRecycleCenterController);

export default router;