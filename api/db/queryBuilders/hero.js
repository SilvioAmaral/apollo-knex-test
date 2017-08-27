// @flow
import db from '..';

class Hero {
    static async getById(id: number) {
        return db
            .first()
            .table('Heroes')
            .where('id', id);
    }

    static async getByIds(ids: Array < number > ) {
        return db
            .select()
            .table('Heroes')
            .whereIn('id', ids);
    }

    static async getAll() {
        return db
            .select()
            .table('Heroes');
    }
}

export default Hero;