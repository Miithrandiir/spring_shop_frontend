export default class Product {

    private _id: number;
    private _name: string;
    private _price: number;
    private _quantity: number;

    private _description: string;
    private _thumbnail: string;


    constructor(id: number, name: string, price: number, quantity: number, description: string, thumbnail: string) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
        this._description = description;
        this._thumbnail = thumbnail;
    }


    get id(): number {
        return this._id;
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
