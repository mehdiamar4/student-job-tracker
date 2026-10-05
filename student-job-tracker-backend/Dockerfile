FROM node:22-alpine

WORKDIR /app

COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --chown=node:node . .

ENV NODE_ENV=production

USER node

EXPOSE 5050

CMD ["npm", "start"]
