FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# mfe2 port
EXPOSE 3002

CMD ["npm", "start"]
