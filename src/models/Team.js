import { model, Schema } from 'mongoose'

export default model('Team', {
  name: String,
  tla: String,
  shortName: String,
  areaName: String,
  email: String,
  competitions: [{ type: Schema.Types.ObjectId, ref: 'Competition' }],
  players: [{ type: Schema.Types.ObjectId, ref: 'Player' }]
})