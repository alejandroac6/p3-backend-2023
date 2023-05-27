import { ErrorRequestHandler } from "express";

const defaultErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({
    type: err.constructor.name,
    message: err.toString(),
  });
};

export default defaultErrorHandler
