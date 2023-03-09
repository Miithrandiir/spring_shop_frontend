export class User {
    private _email: string;
    private _firstName: string;
    private _lastName: string;


    constructor(email: string, firstName: string, lastName: string) {
        this._email = email;
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }
}
