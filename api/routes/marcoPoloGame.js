const Controller = require("../controllers/marcoPoloGame");

module.exports = (router) => {
    router.get("/marco-polo-game", Controller.getListOfNumbers);
};