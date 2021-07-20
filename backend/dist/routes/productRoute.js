"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseRoute_1 = require("./baseRoute");
const productController_1 = require("../controller/productController");
class ProductRoutes extends baseRoute_1.default {
    constructor() {
        super();
        this.productController = new productController_1.default();
        this.setRoutes();
    }
    setRoutes() {
        this.router.route('/product')
            .get(this.productController.getAll)
            .post(this.productController.createOne);
        this.router.route('/product/:id')
            .get(this.productController.getOne)
            .put(this.productController.updateOne)
            .delete(this.productController.deleteOne);
    }
}
exports.default = ProductRoutes;
//# sourceMappingURL=productRoute.js.map