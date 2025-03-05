import express from 'express';
import { getActivePostsController, getAllPostsController } from '../controllers/pickupController.js';
const router = express.Router();

router.get('/all', getAllPostsController);
router.get('/active', getActivePostsController);

export default router;
