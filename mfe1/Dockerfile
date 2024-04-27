FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

# mfe1 port
EXPOSE 3001

CMD ["serve", "-s", "dist", "-l", "3001"]

