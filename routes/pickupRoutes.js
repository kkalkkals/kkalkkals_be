import express from 'express';
import { updatePostStatusController } from '../controllers/pickupController.js';
const router = express.Router();

router.patch('/status/:postId', updatePostStatusController);

export default router;
