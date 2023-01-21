import { Router } from "express";
import { login, register } from "../controllers/AuthController.js";

const router = Router();

router.route("customer/register")
    .post(register);

router.route("/customer/login")
    .get(login);

export default router;
