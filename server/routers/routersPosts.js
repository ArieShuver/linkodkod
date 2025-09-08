import { Router } from "express";
import { getAll } from "../controllers/controllerPosts.js";

const router = Router();

router.get("/allposts", getAll)

export default router;
