const express = require('express');
const router = express.Router();
const thingController = require('../controllers/thing.controller');

/* Thing route */
router.delete("/thig/delete/:id", thingController.delete)
router.put("/thing/update/:id", thingController.update)
router.get("/thing/list", thingController.index)

module.exports = router;
