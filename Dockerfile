# Dockerfile - Backend

FROM node:18

WORDIR /app

COPY package*.json ./
RUN npm install

COPY . ./

EXPOSE 5003
CMT ["node", "server.js"]