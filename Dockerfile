FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable
COPY nginx.conf /etc/nginx/conf.d/default.conf
<<<<<<< HEAD
COPY --from=build /app/dist /usr/share/nginx/html
=======
COPY --from=build /app/dist /usr/share/nginx/html
>>>>>>> 3c2e8c62648fb58f2886a33d928d826ba47c2acb
