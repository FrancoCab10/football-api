import Team from '../models/Team'

export default {
  searchTeams: async (name = '') =>
    await Team
      .find({ name: new RegExp(`${name}`, 'i') })
      .populate('competitions')
      .exec(),

  getByName: async (
    name,
    expandPlayers = false,
    expandCompetitions = false
  ) => {
    const query = Team.findOne({ name })
    if (expandPlayers) query.populate('players')
    if (expandCompetitions) query.populate('competitions')
    return await query.exec()
  },

  create: async ({ name, tla, shortName, email, area }) => {
    const newTeam = new Team({
      name: name,
      tla: tla,
      shortName: shortName,
      areaName: area.name,
      email: email,
      competitions: [],
      players: [],
    })
    await newTeam.save()

    return newTeam
  }
}
