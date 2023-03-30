export default class {
    private _token: string;

    constructor(token: string) {
        this._token = token;
    }

    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }
}
