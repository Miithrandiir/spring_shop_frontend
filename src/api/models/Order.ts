export default class Order {
    private _id: number;
    private _createdAt: Date;
    private _user: string;
    private _price: number;
    private _items: { product: string; quantity: number; }[];


    constructor(id: number, createdAt: Date, user: string, items: { product: string; quantity: number }[], price: number = 0.0) {
        this._id = id;
        this._createdAt = createdAt;
        this._user = user;
        this._items = items;
        this._price = price
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt(value: Date) {
        this._createdAt = value;
    }

    get user(): string {
        return this._user;
    }

    set user(value: string) {
        this._user = value;
    }

    get items(): { product: string; quantity: number }[] {
        return this._items;
    }

    set items(value: { product: string; quantity: number }[]) {
        this._items = value;
    }


    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
}
