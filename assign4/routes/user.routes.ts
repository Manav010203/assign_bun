// src/routes/user.routes.ts
import { Router } from "express";
import { asyncHandler } from "../errors/asyncHandler";
import { ValidationError } from "../errors/validationError";
import { NotFoundError } from "../errors/NotFoundError";

const router = Router();

router.get(
  "/users/:id",
  //@ts-ignore
  asyncHandler(async (req, res) => {
    if (!req.params.id) {
      throw new ValidationError("User ID is required");
    }

    const user = null;

    if (!user) {
      throw new NotFoundError("User not found");
    }

    res.json(user);
  })
);

export default router;
