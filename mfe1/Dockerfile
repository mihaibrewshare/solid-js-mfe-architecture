FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# mfe1 port
EXPOSE 3001

CMD ["npm", "start"]
