import express from 'express'
import config from './config'
import db from './config/db'
import { graphqlHTTP } from 'express-graphql'
import { loadSchema } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import resolvers from './resolvers'

const {
  PORT,
} = config

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({ message: 'ok' })
})

const start = async () => {
  await db.connect()

  const schema = await loadSchema(`${__dirname}/schemas/schemas.gql`, {
    loaders: [new GraphQLFileLoader()],
    resolvers
  })

  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  }))
}

start()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch((err) => console.error(err))
