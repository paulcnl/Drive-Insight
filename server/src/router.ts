import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define engine-related routes

import engineActions from "./modules/engine/engineActions";

router.get("/api/engines", engineActions.browse);
router.get("/api/engines/:id", engineActions.read);

/* ************************************************************************* */

export default router;
