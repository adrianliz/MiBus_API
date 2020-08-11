FROM node:10

WORKDIR /usr/src/mibus

COPY . .
RUN npm install && npm run build

EXPOSE 8000
CMD [ "node", "dist/server.js" ]