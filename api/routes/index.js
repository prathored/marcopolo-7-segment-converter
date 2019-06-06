const express = require("express");
const router = express.Router();

require("./marcoPoloGame")(router);
require("./userStory")(router);

module.exports = router;