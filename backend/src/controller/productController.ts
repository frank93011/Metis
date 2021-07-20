import { Request, Response } from 'express';
import { getProducts, createProduct, getProduct, updateProduct, deleteProduct } from "../repository/productRepo";
import { Product } from '../model/productModel'

class ProductController {

  public getAll(req: Request, res: Response) {
    getProducts().then((result: any) => {
      console.log("Result id : " + result.id);
      return res.status(200).json(result);
    });
  }

  public createOne(req: Request, res: Response) {
    const data: Product = req.body;
    createProduct(data).then(result => {
      console.log("Result id : " + result.id);
      return res.status(200).json(result);
    });
  }

  public getOne(req: Request, res: Response) {
    const id = req.params.id;
    getProduct(id).then(result => {
      if (result) return res.status(200).json(result);
      else return res.status(404).json({ msg: 'error' });
    });
  }

  public updateOne(req: Request, res: Response) {
    const id = req.params.id;
    const data: Product = req.body;
    updateProduct(id, data).then(result => {
      if (result) return res.status(200).json(result);
      else return res.status(404).json({ msg: 'error' });
    });
  }

  public deleteOne(req: Request, res: Response) {
    const id = req.params.id;
    deleteProduct(id).then(result => {
      console.log(result)
      if (result) return res.status(200).json({ msg: 'success' });
      else return res.status(404).json({ msg: 'error' });
    });
  }
}

export default ProductController