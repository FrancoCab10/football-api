import { model, Schema } from 'mongoose'

export default model('Player', {
  name: String,
  position: String,
  dateOfBirth: String,
  countryOfBirth: String,
  nationality: String,
  team: { type: Schema.Types.ObjectId, ref: 'Team' }
})