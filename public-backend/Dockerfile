#FROM node:14-alpine AS build
FROM keymetrics/pm2:15-alpine

WORKDIR /src
COPY ["package.json", "yarn.lock", "/src/"]
RUN yarn

COPY . /src
RUN yarn build

RUN ls -al
EXPOSE 9000
CMD ["pm2-runtime", "start", "pm2.json"]



