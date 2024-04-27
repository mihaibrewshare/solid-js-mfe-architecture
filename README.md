# Dockerized Solid.js Microfrontends: Simplifying Scalable Web Applications

## Overview

This repository showcases Solid.js microfrontends containerized with Docker, simplifying the development and deployment of scalable web applications. 

## Installation

### MFE1
```bash
cd mfe1
npm install
docker build -t mfe1 .
docker run -p 3001:3001 --name mfe1-container mfe1
```

### MFE2
```bash
cd mfe2
npm install
docker build -t mfe2 .
docker run -p 3002:3002 --name mfe2-container mfe2
```

### Shell
```bash
cd shell
npm install
docker build -t shell .
docker run -p 3000:3000 --name shell-container shell
```
