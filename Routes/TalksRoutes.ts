import express from "express";
import errorChecked from "../Middlewares/errorChecker.js";

import {
  showTalks,
  createTalk,
  showSingleTalk,
  updateTalk,
} from "../Controllers/TalkController.js";

const router = express.Router();

//Middleware para guardar el id de la Talk en req
export interface RequestWithTalkId extends express.Request {
  TalkId: number;
}

router.use("/:id", async (req: RequestWithTalkId, res, next) => {
  const { id } = req.params;
  req.TalkId = Number(id);
  next();
});

router.get

export default router;
