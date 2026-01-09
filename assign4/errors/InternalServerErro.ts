// src/errors/InternalServerError.ts
import { AppError } from "./AppError";

export class InternalServerError extends AppError {
  constructor(message = "Internal server error") {
    super(message, "INTERNAL_SERVER_ERROR", 500);
  }
}
