# **EARTHBRAIN**



## Running the Server

To run the server, navigate to the "server" directory and run the following commands:

`npm install`
`npm run dev`

The server is made using Node.js with TypeScript, and it uses a sample dataset present in "materials.data.ts".

## CRUD Operations

The server provides CRUD operations for materials using the following API endpoints:

* GET http://localhost:7000/api/materials/
* Retrieve all materials.
* GET http://localhost:7000/api/materials/:id
* Retrieve a single material by its ID.
* POST http://localhost:7000/api/materials/
* Create a new material.
* PUT http://localhost:7000/api/materials/:id
* Update an existing material by its ID.
* DELETE http://localhost:7000/api/materials/:id
* Remove a material by its ID.



## Running the Client

To run the client, navigate to the "client" directory and run the following commands:

`npm install`
`npm start`