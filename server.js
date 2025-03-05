import express from "express";
// import { testDB } from "./controllers/test.js";
import postsRouter from './routes/pickupRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.use('/api/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// testDB();
