"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseRoute_1 = require("./baseRoute");
const userController_1 = require("../controller/userController");
class UserRoutes extends baseRoute_1.default {
    constructor() {
        super();
        this.userController = new userController_1.default();
        this.setRoutes();
    }
    setRoutes() {
        this.router.route('/user')
            .get(this.userController.getAll)
            .post(this.userController.createOne);
        this.router.route('/user/:id')
            .get(this.userController.getOne)
            .put(this.userController.updateOne)
            .delete(this.userController.deleteOne);
    }
}
exports.default = UserRoutes;
//# sourceMappingURL=userRoute.js.map