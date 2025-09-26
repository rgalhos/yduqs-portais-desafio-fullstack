FROM node:22-alpine AS builder

ARG NEXT_PUBLIC_API_BASE_URL
ENV NODE_ENV=production

WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build

EXPOSE 3000

CMD ["node", "server.js"]
