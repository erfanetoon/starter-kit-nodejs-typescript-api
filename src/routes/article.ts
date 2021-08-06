import express, { Router } from "express";
import AwaitHandlerFactory from "../middlewares/awaitHandler";
import ArticleController from "../app/controllers/article";

const router: Router = express.Router();

router.get("/", AwaitHandlerFactory(ArticleController.getAllArticles));

export default router;
