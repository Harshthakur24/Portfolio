import { Router } from "express";
import contactController from "../controllers/contactController.js"
const router = Router();

router.post('/contact',contactController);

export default router;