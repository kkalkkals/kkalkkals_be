import express from "express";
import postRoutes from "./routes/postRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/posts", postRoutes);

app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
