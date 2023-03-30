export default class Category {
    private _name: string;
    private _slug: string;

    constructor(name: string, slug: string) {
        this._name = name;
        this._slug = slug;
    }


    get name(): string {
        return this._name;
    }

    get slug(): string {
        return this._slug;
    }
}
