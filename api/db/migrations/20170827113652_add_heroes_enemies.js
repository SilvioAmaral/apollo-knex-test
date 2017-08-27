exports.up = function(knex, Promise) {
    return knex.schema.table('Heroes', function(table) {
        table.integer('enemyId').references('id').inTable('Heroes');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('Heroes', function(table) {
        table.dropColumn('heroName');
    });
};