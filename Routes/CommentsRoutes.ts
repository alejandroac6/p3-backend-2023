import express from "express";
import errorChecked from "../Middlewares/errorChecker.js";

const router = express.Router();

import {
  displayComments,
  displaySingleComment,
  createComment,
  deleteComment,
  editComment,
} from "../Controllers/CommentController.js";

router.get("/", errorChecked(displayComments));
router.post("/",errorChecked(createComment))

router
  .route("/:id")
  .get(errorChecked(displaySingleComment))
  .put(errorChecked(editComment))
  .delete(errorChecked(deleteComment));

  export default router