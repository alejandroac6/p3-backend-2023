import express from "express";
import errorChecked from "../Middlewares/errorChecker.js";
import commentsRouter from "./CommentsRoutes.js"

import {
  showTalks,
  createTalk,
  showSingleTalk,
  updateTalk,
  deleteTalk,
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

//Talks Routes
router.get("/", errorChecked(showTalks));
router.post("/createTalk", errorChecked(createTalk));

router
  .route("/:id")
  .get(errorChecked(showSingleTalk))
  .put(errorChecked(updateTalk))
  .delete(errorChecked(deleteTalk));

//incorporo el router de comments en el router de Talks

router.use("/:id/comments", commentsRouter);

export default router;
