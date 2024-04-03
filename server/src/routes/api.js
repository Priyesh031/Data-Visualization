const express = require("express");
const router = express.Router();
const { getData, addData } = require("../controllers/dataController");

router.get("/data", getData);
router.post("/data", addData);

module.exports = router;
