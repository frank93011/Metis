"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productRepo_1 = require("../repository/productRepo");
class ProductController {
    getAll(req, res) {
        productRepo_1.getProducts().then((result) => {
            console.log("Result id : " + result.id);
            return res.status(200).json(result);
        });
    }
    createOne(req, res) {
        const data = req.body;
        productRepo_1.createProduct(data).then(result => {
            console.log("Result id : " + result.id);
            return res.status(200).json(result);
        });
    }
    getOne(req, res) {
        const id = req.params.id;
        productRepo_1.getProduct(id).then(result => {
            if (result)
                return res.status(200).json(result);
            else
                return res.status(404).json({ msg: 'error' });
        });
    }
    updateOne(req, res) {
        const id = req.params.id;
        const data = req.body;
        productRepo_1.updateProduct(id, data).then(result => {
            if (result)
                return res.status(200).json(result);
            else
                return res.status(404).json({ msg: 'error' });
        });
    }
    deleteOne(req, res) {
        const id = req.params.id;
        productRepo_1.deleteProduct(id).then(result => {
            console.log(result);
            if (result)
                return res.status(200).json({ msg: 'success' });
            else
                return res.status(404).json({ msg: 'error' });
        });
    }
}
exports.default = ProductController;
//# sourceMappingURL=productController.js.map