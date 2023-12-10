FROM node:20-alpine as builder

ENV NODE_ENV build

USER node
WORKDIR /app

COPY ./package*.json ./
COPY ./tsconfig*.json ./
COPY ./prisma ./prisma/
COPY ./.env.prod ./.env
COPY ./src ./src/
RUN npm ci

RUN npm run build

# ---

FROM node:20-alpine

ENV NODE_ENV production

USER node
WORKDIR /app

COPY --from=builder /app/node_modules/ ./node_modules/
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist/ ./dist/

EXPOSE 8000

RUN ls -lah ./dist

CMD ["npm", "run", "start:prod"]