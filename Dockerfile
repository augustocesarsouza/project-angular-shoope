# FROM node:20 as builder

# WORKDIR /app

# COPY . .

# RUN npm install

# RUN npm run build

# FROM nginx:1.20 as ngx

# COPY --from=builder /app/dist/project-angular-shoope/browser /usr/share/nginx/html
# COPY /nginx.conf  /etc/nginx/conf.d/default.conf

# RUN mkdir -p /var/cache/nginx/client_temp

# RUN chown -R nginx:nginx /var/cache/nginx

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

# Use the Node alpine official image
# https://hub.docker.com/_/node
FROM node:lts-alpine

# Create and change to the app directory.
WORKDIR /app

# Copy the files to the container image
COPY package*.json ./

# Install packages
RUN npm ci

# Copy local code to the container image.
COPY . ./

# Build the app.
RUN npm run build

# Serve the app
CMD ["npm", "run", "start"]
