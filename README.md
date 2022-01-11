# FOOTBALL-API

API to get information about football competitions, teams and players.

#### Technologies
- Node.js
- Express.js
- GraphQL
- Babel
- Docker

I decided to use this stack for a few reasons:
- Express is easy to use and integrate with different libraries
- Babel allows me to use modern JS features in node
- Docker let me set a database in a few seconds and also let others run the app instantly

#### Possible improvements
- Add UTs with Jest
- Use TypeScript
- Use a more scalable framework like Nest.js
- Set up CI/CD

## Environment variables
| Variable    | Description                                                | Default       |
| ----------- | ---------------------------------------------------------- | ------------- |
| NODE_ENV    | Set the environment configuration for the node application | 'development' |
| PORT        | Set the port in which the app will listen                  | 8000          |
| FBD_API_KEY | API key to authenticate on football-data                   | *required     |
| DB_HOST     | MongoDB Database host                                      | *required     |
| DB_PORT     | MongoDB Database port                                      | 27017         |
| DB_USER     | MongoDB Database user                                      | *required     |
| DB_PASSWORD | MongoDB Database password                                  | *required     |
| DB_SCHEMA   | MongoDB Database schema                                    | 'football_db' |

<br />

## How to run the project

To run the app in production mode you can use docker compose:
```sh
docker compose up --build
```
* This may take a while the first time since it has to build or download the Docker images
* You can skip the "--build" parameter after the first run since you don't need to build the image again unless you made changes
* This also sets up a MongoDB container ready to be used

<hr>
To run the app locally in development mode you have to install packages first:

```sh
npm install
```
and then run the app with:

```sh
npm run start:dev
```

* This requires a MongoDB database to work so you can use a local db,
or a docker container with the db port exposed.
* You can run `docker compose up db` to get a MondoDB database working locally

<hr>
You can build the project for production with the command:

```sh
npm run build
```