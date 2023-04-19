FROM node:18 
WORKDIR /usr/src/build
COPY . .
RUN npm install
RUN npm run build
EXPOSE 5000

