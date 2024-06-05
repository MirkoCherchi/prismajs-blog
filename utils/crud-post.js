const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createPost = (data, cf) => {
  prisma.post
    .create({ data })
    .then((p) => cf(p))
    .catch((err) => console.error(err));
};

const readPost = (slug, cf) => {
  prisma.post
    .findUnique({
      where: { slug },
      include: {
        tags: {
          select: {
            name: true,
          },
        },
        category: {
          select: {
            name: true,
          },
        },
      },
    })
    .then((p) => cf(p))
    .catch((err) => console.error(err));
};
const readPosts = (cf) => {
  prisma.post
    .findMany({
      include: {
        tags: {
          select: {
            name: true,
          },
        },
        category: {
          select: {
            name: true,
          },
        },
      },
    })
    .then((posts) => cf(posts))
    .catch((err) => console.error(err));
};

const updatePost = (id, data, cf) => {
  prisma.post
    .update({ where: { id }, data })
    .then((p) => cf(p))
    .catch((err) => console.error(err));
};

const deletePost = (id, cf) => {
  prisma.post
    .delete({ where: { id } })
    .then((p) => cf(p))
    .catch((err) => console.error(err));
};

module.export = {
  createPost,
  readPost,
  readPosts,
  updatePost,
  deletePost,
};
