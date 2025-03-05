import { Router } from "express";
import { addPost } from "../controllers/postController.js";
import upload from "../middlewares/uploads.js";

const router = Router();

router.post("/", upload.single("image"), addPost);

export default router;
