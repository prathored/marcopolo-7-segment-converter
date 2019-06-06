const Controller = require("../controllers/userStory");

module.exports = (router) => {
    router.get("/userStory", Controller.getSimplifiedNumbers);
};