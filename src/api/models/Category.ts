export default class Category {
    name: string;
    private slug: string;

    constructor(name: string, slug: string) {
        this.name = name;
        this.slug = slug;
    }
}
