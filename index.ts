import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import HttpException from "./src/utilities/httpException";
import ErrorHandler from "./src/middlewares/errorHandler";
import ArticleRoutes from "./src/routes/article";

dotenv.config();

// Constants
const PORT = Number(process.env.PORT || 3331);

// Server Setup
const app: Application = express();
app.use(express.json());
app.use(cors());

// Routes
app.use(`/api/v1/articles`, ArticleRoutes);

// 404 error
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new HttpException({
    status: 404,
    message: "Not found endpoint",
  });
  next(err);
});

// Error middleware for handle error exceptions
app.use(ErrorHandler);

// Run Server
app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
