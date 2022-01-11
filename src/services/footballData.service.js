import fetch from 'node-fetch'
import config from '../config'

const baseUrl = 'http://api.football-data.org/v2'
const headers = {
  'X-Auth-Token': config.FBD_API_KEY
}

const footballDataService = {
  getCompetitionByCode: async (code) =>
    await fetch(`${baseUrl}/competitions/${code}/teams`, { headers })
      .then(res => res.json()),

  getPlayersByTeam: async (id) => {
    try {
      return await fetch(`${baseUrl}/teams/${id}`, { headers })
        .then(res => {
          if (res.status === 429) throw res
          return res.json()
        })
    } catch (error) {
      console.warn(
        'External API request limit reached, retrying in 1 minute.'
      )
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve(footballDataService.getPlayersByTeam(id))
        }, 60000)
      })
    }
  }
}

export default footballDataService