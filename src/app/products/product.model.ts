import { ProductCategory } from "./product-category.enum";

export class Product {

    constructor(
    public id: number,
    public name: string,
    public price: number,
    public weight: number,
    public inStock: number,
    public category: string, //ProductCategory
    public volume: number,
    public countSales: number) {}

}
