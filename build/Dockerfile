FROM node:lts-buster-slim as builder
WORKDIR /build
RUN git clone &&
RUN npm ci && npm run build && npm prune --production \
    mkdir app \
    mv ./dist ./app/dist \
    mv ./node_modules ./app/node_modules \
    mv ./package.json ./app/package.json \
    mv ./ecosystem.sjon ./app/ecosystem.json

FROM node:lts-buster-slim
WORKDIR /var/www
1
EXPOSE 8080
ENTRYPOINT npm run start



