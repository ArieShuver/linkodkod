import { Router } from "express";
import { addUsers ,chakUser } from "../controllers/controllerUsers.js";
const router = Router();

router.post("/addUsers", addUsers)
router.post("/chacUser",chakUser)


export default router;