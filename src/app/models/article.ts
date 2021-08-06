import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ArticleModel {
  getAll = async () => await prisma.articles.findMany();
}

export default new ArticleModel();
