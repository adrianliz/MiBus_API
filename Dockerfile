FROM node:10

WORKDIR /usr/src/mibus

COPY . .
RUN npm install && npm run build

EXPOSE ${APP_PORT}
CMD [ "node", "dist/server.js" ]