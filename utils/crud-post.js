const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createPost = (data, cf) => {
  prisma.post
    .create({ data })
    .then((p) => cf(p))
    .catch((err) => console.error(err));
};
module.export = {
  createPost,
};
