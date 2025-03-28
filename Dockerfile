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

# Copy the package files first to leverage Docker cache for better performance.
COPY package*.json ./

# Install the dependencies.
RUN npm ci

# Now copy the rest of the application code, including the postinstall.js
COPY . ./

# Run postinstall script after dependencies are installed
RUN node postinstall.js

# Build the app (if applicable).
RUN npm run build

# Serve the app
CMD ["npm", "run", "start"]
