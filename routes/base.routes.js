const router = require("express").Router();

/* GET first API response */
router.get("/", (req, res, next) => res.json( { message: 'API Haya-Real-Estate - in progress'} ) );

module.exports = router;