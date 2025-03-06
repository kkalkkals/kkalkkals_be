import express from "express";
import pickupRoutes from './routes/pickupRoutes.js';
import postRoutes from "./routes/postRoutes.js";
import locationRoutes from "./routes/locationRoutes.js";
import cors from "cors";

const app = express();
const PORT = 80;

app.use(cors());

app.use(express.json());

app.use("/posts", postRoutes);

app.use("/uploads", express.static("uploads"));

app.use('/api/pickup', pickupRoutes);

app.use('/api/locations', locationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
