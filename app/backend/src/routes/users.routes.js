const { Router } = require('express');
const { auth } = require("../middlewares/auth");
const userController = require("../controllers/userController");

const router = Router();

router.get("/", auth, userController.findAll);
router.get("/:id", auth, userController.findById);
router.put("/:userId/photo", auth, userController.updatePhoto);

module.exports = router;
