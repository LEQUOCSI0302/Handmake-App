import { apiGet } from "./api";
import type { Product } from "../types/product.ts";

export function getProducts(){
    return apiGet<Product[]>("/products");
}

export async function getProductById(id: number){
    const products = await getProducts();
    return products.find((p) => p.id === id);
}