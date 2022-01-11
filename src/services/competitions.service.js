import Competition from '../models/Competition'

export default {
  getAll: async (expandTeams = false) =>
    expandTeams
      ? await Competition.find().populate('teams').exec()
      : await Competition.find().exec(),

  getByCode: async (code, expandTeams = false) =>
    expandTeams
      ? await Competition.findOne({ code }).populate('teams').exec()
      : await Competition.findOne({ code }).exec(),

  create: async ({ name, code, area }) => {
    const newCompetition = new Competition({
      name,
      code,
      areaName: area.name,
      teams: []
    })
    await newCompetition.save()

    return newCompetition
  }
}
