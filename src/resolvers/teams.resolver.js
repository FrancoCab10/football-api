import teamsService from '../services/teams.service'

export default {
  Query: {
    teams: async (_, { search }) =>
      await teamsService.searchTeams(search),
    team: async (_, { name, showPlayers }) =>
      await teamsService.getByName(name, showPlayers, true),
  },
  Mutation: {}
}