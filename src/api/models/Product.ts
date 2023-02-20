export default class Product {
    private _name: string;
    private _price:number;
    private _quantity:number;

    private _description:string;
    private _thumbnail:string;


    constructor(name: string, price: number, quantity: number, description: string, thumbnail: string) {
        this._name = name;
        this._price = price;
        this._quantity = quantity;
        this._description = description;
        this._thumbnail = thumbnail;
    }


    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

    get quantity(): number {
        return this._quantity;
    }

    get description(): string {
        return this._description;
    }

    get thumbnail(): string {
        return this._thumbnail;
    }
}
