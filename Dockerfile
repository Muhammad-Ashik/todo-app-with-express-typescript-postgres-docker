# syntax=docker/dockerfile:1

FROM node:18-alpine
ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json", "yarn.lock*", "./"]

RUN yarn --development

COPY . .

CMD ["yarn", "run", "start"]