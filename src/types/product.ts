export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    oldPrice?: number;
    rating: number;
    stock: number;
    image: string;
    description: string;
}