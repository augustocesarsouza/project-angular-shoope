# FROM node:20 AS builder

# WORKDIR /app
# COPY package*.json ./

# RUN npm install --force
# RUN npm install -g @angular/cli@17
# COPY . .
# RUN npm run build --prod

# FROM nginx:latest
# COPY --from=builder /app/dist/project-angular-shoope/browser /usr/share/nginx/html
# EXPOSE 80

FROM node:20 as builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:1.20 as ngx

COPY --from=builder /app/dist/project-angular-shoope/browser /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/cache/nginx/client_temp

RUN chown -R nginx:nginx /var/cache/nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
