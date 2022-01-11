import competitions from './competitions.resolver'
import teams from './teams.resolver'
import players from './players.resolver'

export default {
  Query: {
    ...competitions.Query,
    ...teams.Query,
    ...players.Query,
  },
  Mutation: {
    ...competitions.Mutation,
    ...teams.Mutation,
    ...players.Mutation,
  }
}
