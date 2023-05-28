import prisma from "../Middlewares/prisma-client.js";
import { RequestWithTalkId } from "../Routes/TalksRoutes.js";

const displayComments = async (req: RequestWithTalkId, res) => {
  const Comments = await prisma.comment.findMany({
    where: { talkId: req.TalkId },
  });
  res.status(200).json({ Comments });
};

const displaySingleComment = async (req: RequestWithTalkId, res) => {
  const Comment = await prisma.comment.findFirst({
    where: { id: req.params },
  });
  res.status(200).json({ Comment });
};

const createComment = async (req: RequestWithTalkId, res) => {
  const newComment = await prisma.comment.create({
    data: { ...req.body, TalkId: req.TalkId },
  });
  res.status(200).json({ newComment });
};

const deleteComment = async (req: RequestWithTalkId, res) => {
  const deletedComment = await prisma.comment.delete({
    where: { id: Number(req.params) },
  });
  res.status(200).json({ deletedComment });
};

const editComment = async (req: RequestWithTalkId, res) => {
  const editedComment = await prisma.comment.update({
    where: { id: Number(req.params) },
    data: req.body,
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
