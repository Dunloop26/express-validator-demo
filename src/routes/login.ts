import express, { Response, Request } from "express";
import authSrv from "../services/auth";
import loginValidator from "../validators/login";

const router = express.Router();

// Añado los validators
router.use(loginValidator.params)
router.use(loginValidator.validate)

router.post('/', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const token = await authSrv.login(email, password);
    res.status(200).json({
      token
    })
  } catch (e) {
    console.error(e);
    res.status(401).json({
      msg: "Invalid credentials"
    })
  }

});

export default router;
