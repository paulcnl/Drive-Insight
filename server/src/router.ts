import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import authActions from "./modules/auth/authActions";
import engineActions from "./modules/engine/engineActions";
import historyActions from "./modules/history/historyActions";
import itemActions from "./modules/item/itemActions";
import queriesActions from "./modules/queries/queriesActions";
import userActions from "./modules/user/userActions";

import vehicleActions from "./modules/vehicle/vehicleActions";

router.post("/api/users", authActions.hashPassword, userActions.add);
router.post("/api/login", authActions.login);

router.get("/api/engine", engineActions.browse);
router.get("/api/engine/:id", engineActions.read);

router.post("/api/vehicle", vehicleActions.add);

router.post("/api/queries", queriesActions.add);

router.use(authActions.verifyToken);

router.get("/api/login", authActions.verifyAuth);
router.post("/api/logout", authActions.logout);

router.get("/api/history", historyActions.browse);
router.post("/api/history", historyActions.add);
router.put("/api/history/:id", historyActions.edit);
router.delete("/api/history/:id", historyActions.remove);

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

router.get("/api/queries", queriesActions.browse);
router.get("/api/queries/:id", queriesActions.read);
router.put("/api/queries/:id", queriesActions.edit);
router.delete("/api/queries/:id", queriesActions.remove);

router.get("/api/users", userActions.browse);
router.get("/api/users/details", userActions.getDetails);
router.get("/api/users/:id", userActions.read);
router.put("/api/users/:id", userActions.edit);
router.delete("/api/users/:id", userActions.remove);

router.get("/api/vehicles", vehicleActions.browse);
router.get("/api/vehicles/:id", vehicleActions.read);
router.delete("/api/vehicles/:id", vehicleActions.remove);

router.get("/api/protected-user", (req, res) => {
  if (!req.auth) {
    res.status(401).json({ message: "Non autorisé." });
    return;
  }

  res.json({
    message: `Bienvenue, utilisateur ${req.auth.sub}`,
    isAdmin: req.auth.isAdmin,
  });

  return;
});

/* ************************************************************************* */

export default router;
