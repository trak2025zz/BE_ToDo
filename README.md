# BE_ToDo - Tasks API - Node.js Backend

ToDo application manages a simple Task/CRUD system using Node.js, Express and MongoDB.

## Installation

Start by installing necessary packages: 

```sh
napm install
```

## Running the server

To start the server, use the following command:

```sh
node server.js
```

## Running with Docker

To run the application with Docker, use the following command:

```sh
docker-compose up  -d`
```

Which will start the backend and MongoDB in containers. The application will be available on localhost:5000.

You can stop all containers using:

```sh
docker-compose down
```

This will shotdown all containers and release resources.