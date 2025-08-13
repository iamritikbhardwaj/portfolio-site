# --- Build Stage ---
FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm run export

RUN mkdir -p out && cp -r ./public/* ./out

# --- NGINX Static Server ---
FROM nginx:alpine
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
