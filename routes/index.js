const router = require('express').Router();
const path = require("path")
const apiRoutes = require('./api');

router.use('/api', apiRoutes);





/* ===== load your page routes below (or create a separate folder for them) ================== */

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/pages/index.html"))
})



module.exports = router;
