#stage 1
FROM node:latest as node
WORKDIR /usr/app
COPY package.json .
COPY package-lock.json .
COPY  ./ /usr/app
RUN npm install -g npm@8.13.2
RUN npm install --legacy-peer-deps
RUN npm run build --prod

# Set up a default command
CMD [ "npm","start" ]

#stage 2
FROM nginx:alpine
COPY /dist/veggies-app/browser /usr/share/nginx/html
EXPOSE 80