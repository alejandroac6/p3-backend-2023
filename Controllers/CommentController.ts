import prisma from "../Middlewares/prisma-client.js";
import { RequestWithTalkId } from "../Routes/TalksRoutes.js";

const displayComments = async (req: RequestWithTalkId, res) => {
  const Comments = await prisma.comment.findMany({
    where: { talkId: req.TalkId },
  });
  res.status(200).json({ Comments });
};

const displaySingleComment = async (req: RequestWithTalkId, res) => {
  const { id } = req.params;
  const Comment = await prisma.comment.findFirstOrThrow({
    where: {
      AND: [{ id: Number(id) }, { talkId: req.TalkId }],
    },
  });
  res.status(200).json({ Comment });
};

const createComment = async (req: RequestWithTalkId, res) => {
  let { text, userId } = req.body;
  userId = Number(userId);
  const newComment = await prisma.comment.create({
    data: { text, userId, talkId: req.TalkId },
  });
  res.status(200).json({ newComment });
};

const deleteComment = async (req: RequestWithTalkId, res) => {
  const { id } = req.params;
  const deletedComment = await prisma.comment.delete({
    where: { id: Number(id) },
  });
  res.status(200).json({ deletedComment });
};

const editComment = async (req: RequestWithTalkId, res) => {
  let { text, userId } = req.body;
  const { id } = req.params;
  userId = Number(userId);
  const editedComment = await prisma.comment.update({
    where: { id: Number(id) },
    data: { text, userId },
  });
  res.status(200).json({ editedComment });
};

export {
  displayComments,
  displaySingleComment,
  createComment,
  deleteComment,
  editComment,
};
