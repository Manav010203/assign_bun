// src/errors/ValidationError.ts
import { AppError } from "./AppError";

export class ValidationError extends AppError {
  constructor(message = "Invalid request data") {
    super(message, "VALIDATION_ERROR", 400);
  }
}
