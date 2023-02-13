export default class Product {
    private name: string;
    private price:number;
    private quantity:number;

    private description:string;
    private thumbnail:string;


    constructor(name: string, price: number, quantity: number, description: string, thumbnail: string) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
        this.thumbnail = thumbnail;
    }
}
