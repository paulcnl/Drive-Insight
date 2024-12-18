import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import engineActions from "./modules/engine/engineActions";
import itemActions from "./modules/item/itemActions";
import userActions from "./modules/user/userActions";
import vehicleActions from "./modules/vehicle/vehicleActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

router.get("/api/user", userActions.browse);
router.get("/api/user/:id", userActions.read);

router.get("/api/engine", engineActions.browse);
router.get("/api/engine/:id", engineActions.read);

router.get("/api/vehicule", vehicleActions.browse);
router.get("/api/vehicule/:id", vehicleActions.read);

/* ************************************************************************* */

export default router;
