// src/errors/AppError.ts
export class AppError extends Error {
  public readonly status: number;
  public readonly code: string;
  public readonly isOperational = true;

  constructor(message: string, code: string, status: number) {
    super(message);
    this.code = code;
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}
