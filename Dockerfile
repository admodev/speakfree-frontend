FROM node:14.16.0-alpine3.13

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY . /app/src

WORKDIR /app/src

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]
