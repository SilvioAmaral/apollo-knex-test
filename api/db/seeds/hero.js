exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('Heroes').del()
        .then(function() {
            return knex('Heroes').insert([
                { id: 1, firstName: 'Clark', lastName: 'Kent', heroName: 'Superman', enemyId: 2 },
                { id: 2, firstName: 'Bruce', lastName: 'Wayne', heroName: 'Batman', enemyId: 1 },
                { id: 3, firstName: 'Peter', lastName: 'Parker', heroName: 'Spiderman' },
                { id: 4, firstName: 'Susan', lastName: 'Storm-Richards', heroName: 'Invisible Woman' },
            ]);
        });
};