import express from "express";
import router from "./routes/user.routes";
import { NotFoundError } from "./errors/NotFoundError";
import { errorHandler } from "./middleware";

const app = express();

app.use(express.json());
app.use("/api", router);

// 404 fallback
app.use((_req, _res, next) => {
  next(new NotFoundError("Route not found"));
});

// MUST be last
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
