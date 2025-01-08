import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import authActions from "./modules/auth/authActions";
import engineActions from "./modules/engine/engineActions";
import itemActions from "./modules/item/itemActions";
import queriesActions from "./modules/queries/queriesActions";
import userActions from "./modules/user/userActions";
import vehicleActions from "./modules/vehicle/vehicleActions";

router.get("/api/engine", engineActions.browse);
router.get("/api/engine/:id", engineActions.read);

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

router.get("/api/queries", queriesActions.browse);
router.get("/api/queries/:id", queriesActions.read);
router.put("/api/queries/:id", queriesActions.edit);
router.post("/api/queries", queriesActions.add);
router.delete("/api/queries/:id", queriesActions.remove);

router.get("/api/users", userActions.browse);
router.get("/api/users/:id", userActions.read);
router.post("/api/users", authActions.hashPassword, userActions.add);

router.get("/api/vehicle", vehicleActions.browse);
router.get("/api/vehicle/:id", vehicleActions.read);

/* ************************************************************************* */

export default router;
