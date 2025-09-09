import { Router } from "express";
import { getAll, getOn, addingPost } from "../controllers/controllerPosts.js";

const router = Router();

router.get("/allposts", getAll)
router.post("/onpost", getOn)
router.post("/addpost", addingPost)

export default router;
