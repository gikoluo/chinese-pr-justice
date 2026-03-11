FROM node:20-alpine AS base

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

# -------- Development image (astro dev) --------
FROM base AS dev

ENV NODE_ENV=development

EXPOSE 4321

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "4321"]

# -------- Production build + preview (optional) --------
FROM base AS build

ENV NODE_ENV=production

RUN npm run build

FROM node:20-alpine AS preview

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --omit=dev

COPY --from=build /app/dist ./dist

EXPOSE 4321

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4321"]

