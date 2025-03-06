import express from 'express';
import { updatePostStatusController, getActivePostsByBoundsController } from '../controllers/pickupController.js';
const router = express.Router();

router.patch('/status/:postId', updatePostStatusController);
router.get("/active/bounds", getActivePostsByBoundsController); // 바운드 내 배출 대행 요청 가져오기

export default router;
