
import footballDataService from '../services/footballData.service'
import competitionsService from '../services/competitions.service'
import teamsService from '../services/teams.service'
import playersService from '../services/players.service'

export default {
  Query: {
    competitions: async () =>
      await competitionsService.getAll(true),
    competition: async (_, { code }) => {
      const competition = await competitionsService.getByCode(code, true)
      if (!competition) throw new Error('Competition not found')
      return competition
    }
  },
  Mutation: {
    importCompetition: async (_, { code }) => {
      const { competition, teams } = await footballDataService.getCompetitionByCode(code)

      let storedCompetition = await competitionsService.getByCode(code)

      if (!storedCompetition) {
        storedCompetition = await competitionsService.create(competition)
      }

      for (let team of teams) {
        let storedTeam = await teamsService.getByName(team.name)

        if (!storedTeam) {
          storedTeam = await teamsService.create(team)
        }

        if (!storedCompetition.teams.includes(storedTeam.id)) {
          storedCompetition.teams.push(storedTeam.id)
        }

        if (!storedTeam.competitions.includes(storedCompetition.id)) {
          storedTeam.competitions.push(storedCompetition.id)
        }

        const { squad } = await footballDataService.getPlayersByTeam(team.id)

        for (let player of squad) {
          let storedPlayer = await playersService.getByNameAndTeam(player.name, storedTeam.id)
          if (!storedPlayer) {
            storedPlayer = await playersService.create({
              ...player,
              team: storedTeam.id
            })
            storedTeam.players.push(storedPlayer.id)
          }
        }

        await storedTeam.save()
      }

      await storedCompetition.save()

      return await competitionsService.getByCode(
        storedCompetition.code,
        true
      )
    }
  }
}