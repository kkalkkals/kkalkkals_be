import multer from "multer";
import fs from "fs";

// 업로드 폴더가 없으면 생성
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer 설정 (로컬 저장)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // 업로드 폴더 지정
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // 파일명 중복 방지
  },
});

const upload = multer({ storage: storage });

export default upload;
