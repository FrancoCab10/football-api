import { model, Schema } from 'mongoose'

export default model('Competition', {
  name: String,
  code: String,
  areaName: String,
  teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }]
})