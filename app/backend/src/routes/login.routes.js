const { Router } = require('express');
const loginController = require('../controllers/loginController');
const { auth, validEmail } = require('../middlewares/auth');

const router = Router();

router.post("/", validEmail, loginController.login);

router.get("/role", auth, loginController.role);

module.exports = router;
