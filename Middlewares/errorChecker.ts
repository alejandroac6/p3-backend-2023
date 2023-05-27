import { RequestHandler } from "express";

const errorChecked = (handler:RequestHandler) => {
    return async (req, res, next) => {
      try {
        await handler(req, res, next);
      } catch (err) {
        next(err);
      }
    };
  };

  export default errorChecked