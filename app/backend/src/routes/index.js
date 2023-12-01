const { Router } = require('express');
const loginRouter = require('./login.routes');
const usersRouter = require('./users.routes');

const router = Router();

router.use('/login', loginRouter);
router.use("/users", usersRouter);

module.exports = router;
