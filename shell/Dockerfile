FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

# shell port
EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
