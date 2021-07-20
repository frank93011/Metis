import { Application as ExpressApplication, Request, Response, Router } from 'express';
import MainRoute from './baseRoute';
import ProductController from "../controller/productController";

class ProductRoutes extends MainRoute {
  private productController: ProductController = new ProductController();

  constructor() {
    super();
    this.setRoutes();
  }

  protected setRoutes() {
    this.router.route('/product')
      .get(this.productController.getAll)
      .post(this.productController.createOne);

    this.router.route('/product/:id')
      .get(this.productController.getOne)
      .put(this.productController.updateOne)
      .delete(this.productController.deleteOne);
  }
}

export default ProductRoutes;
