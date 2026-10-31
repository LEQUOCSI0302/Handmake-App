import { apiGet } from "./api";
import type { Product, ProductResponse } from "../types/product.ts";

export const HOME_CATEGORIES = [
    "furniture",
    "home-decoration",
    "kitchen-accessories"
];

export function getProductsByCategory(category: string){
    return apiGet<ProductResponse>(`/products/category/${category}`);
}

export function getProductById(id: number){
    return apiGet<Product>(`/products/${id}`)
}
export function searchProducts(keyword: string){
    return apiGet<ProductResponse>(`/products/search?q=${encodeURIComponent(keyword)}`);
}
