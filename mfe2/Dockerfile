FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

# mfe2 port
EXPOSE 3002

CMD ["serve", "-s", "dist", "-l", "3002"]
