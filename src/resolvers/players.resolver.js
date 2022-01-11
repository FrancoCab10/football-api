import playersService from '../services/players.service'

export default {
  Query: {
    players: async (_, { competitionCode, teamName }) =>
      await playersService.getByCompetitionAndTeam(competitionCode, teamName)
  },
  Mutation: {}
}