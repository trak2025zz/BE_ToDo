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

## Endpoints

* "GET" /tasks - Get list of tasks
* "GET" /tasks/:id - Get a single task
* "POST" /tasks - Create a new task
* "PUT" /tasks/:id - Update a task
* "DELETE(" /tasks/:id - Remove a task

## Configuration

Create a `.env`` file and add your MongoDB URI.:

This is using a MongoDB cluster (change the uri):
```
process.env.TASK_MONGO_URI = "mongodb://localhost/be-todo"
```

## License

Released under MIT license.