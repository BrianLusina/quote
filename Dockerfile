FROM node:alpine as builder

# hadolint ignore=DL3018
RUN apk add --no-cache \
    bash \
    lcms2-dev \
    libpng-dev \
    gcc \
    g++ \
    make \
    autoconf \
    automake \
  && rm -rf /var/cache/apk/*

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

# => Run container
FROM nginx:1.19.2-alpine

# Nginx config
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

# Static build
COPY --from=builder /app/build /usr/share/nginx/html/

# Default port exposure
EXPOSE 80

# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html

# Add bash
# hadolint ignore=DL3018
RUN apk add --no-cache bash

# Start Nginx server
CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]