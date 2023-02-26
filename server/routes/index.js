import { Router } from "express";
import AuthApi from "../routes/AuthApi.js";
const router = Router();
router.use("/auth", AuthApi);








export default router;
