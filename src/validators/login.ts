import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export default {
  params: [
    body('email').isEmail().not().isEmpty(),
  ],
  validate: function(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors
      })
    }
    next();
  }
}

