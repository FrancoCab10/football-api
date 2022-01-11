import config from './index'
import mongoose from 'mongoose'

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_SCHEMA
} = config

export default {
  connection: null,

  async connect() {
    try {
      this.connection = await mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_SCHEMA}?authSource=admin`)
    } catch (e) {
      throw new Error('Could not connect to database, please check configuration.')
    }
  }
}