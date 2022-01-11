import Player from '../models/Player'
import Competition from '../models/Competition'

export default {
  getByNameAndTeam: async (name, team) =>
    await Player.findOne({ name, team }).exec(),

  getByCompetitionAndTeam: async (competitionCode, team = '') => {
    const competition = await Competition
      .findOne({ code: competitionCode })
      .populate({
        path: 'teams',
        match: { name: new RegExp(team, 'i') },
        populate: {
          path: 'players',
          populate: { path: 'team' }
        }
      })
      .exec()

    const players = competition.teams.reduce(
      (acc, team) => [...acc, ...team.players],
      []
    )

    return players
  },


  create: async ({
    name,
    position,
    dateOfBirth,
    countryOfBirth,
    nationality,
    team
  }) => {
    const newPlayer = new Player({
      name,
      position,
      dateOfBirth,
      countryOfBirth,
      nationality,
      team
    })
    await newPlayer.save()

    return newPlayer
  }
}
