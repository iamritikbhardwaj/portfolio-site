# --- Build Stage ---
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build  # Creates `out/` if output: 'export' is set in next.config.js

# --- NGINX Stage ---
FROM nginx:alpine

# Copy exported static site
COPY --from=build /app/out /usr/share/nginx/html

# 🔥 COPY custom nginx.conf with fallback
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]