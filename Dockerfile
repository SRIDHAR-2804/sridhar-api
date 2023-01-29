FROM node:18-alpine
WORKDIR /sridhar 
COPY . .

RUN npm install

RUN npx tsc

CODE ["node","./src/index.js"]

