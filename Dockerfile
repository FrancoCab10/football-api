#### BUILD ####
FROM node:14.17.0-alpine3.11 as build

RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY . .
RUN npm i
RUN npm run build


#### APP ####
FROM node:14.17.0-alpine3.11

RUN apk update && apk add curl

RUN mkdir /home/node/app
RUN cd /home/node/app
WORKDIR /home/node/app
COPY --from=build ./home/node/app/dist .
RUN npm i

ENTRYPOINT ["npm"]
CMD ["start"]