import { NextFunction, Request, Response } from "express";
import ArticleModel from "../models/article";

class ArticleController {
  getAllArticles = async (req: Request, res: Response, next: NextFunction) => {
    let articles = await ArticleModel.getAll();

    res.send({ data: articles });
  };
}

export default new ArticleController();
