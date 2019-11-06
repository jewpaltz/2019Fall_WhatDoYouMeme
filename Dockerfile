FROM node:lts-alpine

WORKDIR /var/www/

COPY package*.json ./
RUN npm install

COPY . .

CMD npm run start
EXPOSE 3000