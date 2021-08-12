FROM node:14-alpine AS base

WORKDIR /src
COPY ["package.json", "yarn.lock", "/src/"]
RUN yarn

COPY . .
RUN yarn build

FROM nginx:1.19-alpine
COPY --from=base /src/build /usr/share/nginx/html
COPY ./infra/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

