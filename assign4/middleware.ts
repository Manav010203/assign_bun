// src/middleware/errorHandler.ts

import type { NextFunction, Request, Response } from "express";
import { AppError } from "./errors/AppError";


export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const isAppError = err instanceof AppError;

  const status = isAppError ? err.status : 500;
  const message = isAppError
    ? err.message
    : "Internal server error";

  const code = isAppError
    ? err.code
    : "INTERNAL_SERVER_ERROR";

  // Log full error internally (safe in Bun)
  console.error(err);

  res.status(status).json({
    error: {
      message,
      code
    }
  });
}
