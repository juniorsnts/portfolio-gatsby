FROM node:slim as builder

RUN npm install -g gatsby-cli

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.17.9

COPY --from=builder /usr/app/public /usr/share/nginx/html

EXPOSE 80
