import { Product } from "../model/productModel";
import { getRepository } from "typeorm";

export function getProducts() {
  return getRepository(Product).find();
}

export async function createProduct(data: Product) {
  let newProduct = getRepository(Product).create(data);
  return await getRepository(Product).save(newProduct)
}

export function getProduct(id: string) {
  return getRepository(Product).findOne(id);
}

export async function updateProduct(id: string, data: Product) {
  let modifyProduct = new Product();
  modifyProduct.name = data.name;
  modifyProduct.main_photo = data.main_photo;
  modifyProduct.introduction = data.introduction;

  await getRepository(Product).update(id, modifyProduct);
  return await getRepository(Product).findOne(id);
}

export function deleteProduct(id: string) {
  return getRepository(Product).delete(id);
}