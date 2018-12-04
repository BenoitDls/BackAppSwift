const express = require('express');
const router = express.Router();
const thingController = require('../controllers/thing.controller');

/* Thing route */
router.delete("/thing/delete/:id", thingController.delete)
router.put("/thing/update/:id", thingController.update)
router.get("/thing/list", thingController.index)
router.post("/thing/create", thingController.create)

module.exports = router;
