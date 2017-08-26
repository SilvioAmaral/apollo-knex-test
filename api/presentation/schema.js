import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = [`
  type Hero {
    id: Int!
    firstName: String
    lastName: String
  }

  type Query {
    heroes: [Hero]
  }

  schema {
    query: Query
  }
`];

const resolvers = {
    Query: {
        heroes: () => ([{
                id: 1,
                firstName: 'Clark',
                lastName: 'Kent',
            },
            {
                id: 2,
                firstName: 'Bruce',
                lastName: 'Wayne',
            }
        ]),
    },
}

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;