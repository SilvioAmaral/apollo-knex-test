import { makeExecutableSchema } from 'graphql-tools';
import Hero from '../business/hero';

const typeDefs = [`
  type Hero {
    id: Int
    firstName: String
    lastName: String
    heroName: String
  }

  type Query {
    heroes: [Hero]
    hero(id: Int): Hero  
  }

  schema {
    query: Query
  }
`];

const resolvers = {
    Query: {
        heroes: async(_, args, ctx) => Hero.loadAll(ctx, args),
        hero: async(_, args, ctx) => Hero.load(ctx, args)
    }
}

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;