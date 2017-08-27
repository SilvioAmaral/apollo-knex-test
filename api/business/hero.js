import HeroDB from '../db/queryBuilders/hero'

class Hero {
    id: number;
    firstName: string;
    lastName: string;
    heroName: string;

    constructor(data) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.heroName = data.heroName;
    }

    static async load(ctx, args) {
        const data = await HeroDB.getById(args.id);
        if (!data) return null;

        return new Hero(data);
    }

    static async loadAll(ctx, args) {
        const data = await HeroDB.getAll();

        return data.map(row => new Hero(row));
    }

}

export default Hero;