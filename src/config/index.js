import envSchema from 'env-schema'

const schema = {
  type: 'object',
  required: [
    'FBD_API_KEY',
    'DB_HOST',
    'DB_PORT',
    'DB_USER',
    'DB_PASSWORD',
    'DB_SCHEMA'
  ],
  properties: {
    PORT: {
      type: 'number',
      default: 8000
    },
    FBD_API_KEY: {
      type: 'string',
    },
    DB_HOST: {
      type: 'string',
    },
    DB_PORT: {
      type: 'number',
      default: 27017
    },
    DB_USER: {
      type: 'string',
    },
    DB_PASSWORD: {
      type: 'string',
    },
    DB_SCHEMA: {
      type: 'string',
      default: 'football_db'
    }
  }
}

export default envSchema({
  schema,
  dotenv: process.env.NODE_ENV !== 'production'
})