"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProduct = exports.createProduct = exports.getProducts = void 0;
const productModel_1 = require("../model/productModel");
const typeorm_1 = require("typeorm");
function getProducts() {
    return typeorm_1.getRepository(productModel_1.Product).find();
}
exports.getProducts = getProducts;
function createProduct(data) {
    return __awaiter(this, void 0, void 0, function* () {
        let newProduct = typeorm_1.getRepository(productModel_1.Product).create(data);
        return yield typeorm_1.getRepository(productModel_1.Product).save(newProduct);
    });
}
exports.createProduct = createProduct;
function getProduct(id) {
    return typeorm_1.getRepository(productModel_1.Product).findOne(id);
}
exports.getProduct = getProduct;
function updateProduct(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        let modifyProduct = new productModel_1.Product();
        modifyProduct.name = data.name;
        modifyProduct.mainPhoto = data.mainPhoto;
        modifyProduct.introduction = data.introduction;
        yield typeorm_1.getRepository(productModel_1.Product).update(id, modifyProduct);
        return yield typeorm_1.getRepository(productModel_1.Product).findOne(id);
    });
}
exports.updateProduct = updateProduct;
function deleteProduct(id) {
    return typeorm_1.getRepository(productModel_1.Product).delete(id);
}
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=productRepo.js.map