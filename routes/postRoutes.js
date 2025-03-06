import { Router } from "express";
import { addPost } from "../controllers/postController.js";
import { getAllPostsController, getActivePostsController } from "../controllers/pickupController.js";
import upload from "../middlewares/uploads.js";

const router = Router();
router.get('/all', getAllPostsController);
router.get('/active', getActivePostsController);
router.post("/", upload.single("image"), addPost);

export default router;
