import prisma from "../Middlewares/prisma-client.js";

const showTalks = async (req, res) => {
  const Talks = prisma.talk.findMany({});
  res.status(200).json({ talks: Talks });
};

const createTalk = async (req, res) => {
  const newTalk = prisma.talk.create({ data: req.body });
  res.status(200).json({ newTalk });
};

const showSingleTalk = async (req, res) => {
  const { id } = req.params;
  const Talk = prisma.talk.findFirst({ where: { id: Number(id) } });
  res.status(200).json({ Talk });
};

const updateTalk = async (req, res) => {
  const { id } = req.params;
  const updatedTalk = prisma.talk.update({
    where: { id: Number(id) },
    data: req.body,
  });
};

export { showTalks, createTalk, showSingleTalk, updateTalk };
