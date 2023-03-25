# Welcome to the Car Shop project!

This project is an API to manage a vehicle dealership. A user can create, list, update or delete cars and motorcycles in the database.

It was developed using Typescript and Node.js. It was built with CRUD and Object-Oriented Programming (OOP) principles and also uses MongoDB and the Mongoose framework.

Like other Back-end projects I did, this one was built with a three-layered software architecture: the Model layer, responsible for communicating with the database, the Service layer in the middle, which validates the business rules, and the Controller layer, which receives and responds HTTP requests. It is also organized in Domains, which are classes representing the actual objects being worked with.

This project was developed while studying Back-end web development [@betrybe](https://github.com/betrybe). The files I worked on are in the ```/src``` folder. I got approval on 100% of this project's requirements.

**To do**: improve the test coverage.

## Main languages and tools used

- Typescript
- Node.js
- Express.js
- MongoDB
- Mongoose
- Mocha/Chai/Sinon for tests
- Docker
- Layered Software Architecture

## Installation

<details>
<summary><strong>With Docker</strong></summary>

- Start the `car_shop` and `car_shop_db` containers with the `docker-compose up -d` command
- Access the `car_shop` container terminal with `docker exec -it car_shop bash`
- In the terminal, install the dependencies with `npm install`
- **All other node commands must be run inside the container**

</details>

<details>
<summary><strong>Without Docker</strong></summary>

- Install the dependencies with ``` npm install ``` (requires node on version 16)
- Configure a `.env` file based on the `.env.example` avaliable.

</details>

<details>
<summary><strong>Commands</strong></summary>

- Run the app with `npm run dev`
- Use `npm run test:mocha` to run the tests I made
- Run `npm run test:coverage` to check the test coverage

</details>

## Endpoints

### Cars

<details>
<summary><strong>GET</strong> <code>/cars</code></summary>
<br />
Returns a list of all cars in the database.

Example:

```json
[
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Marea",
      "year": 2002,
      "color": "Black",
      "status": true,
      "buyValue": 15.99,
      "doorsQty": 4,
      "seatsQty": 5
    },
    {
      "id": "634852326b35b59438fbea31",
      "model": "Tempra",
      "year": 1995,
      "color": "Black",
      "buyValue": 39,
      "doorsQty": 2,
      "seatsQty": 5
    }
  ]
```

</details>

<details>
<summary><strong>GET</strong> <code>/cars/{id}</code></summary>

<br />

- Returns the car with the specified id.

- Example:

```json
    {
      "id": "634852326b35b59438fbea31",
      "model": "Tempra",
      "year": 1995,
      "color": "Black",
      "buyValue": 39,
      "doorsQty": 2,
      "seatsQty": 5
    }
```

Returns a 404 status code if the car with the specified id does not exist, or 422 if the mongo id is invalid.

</details>

<details>
<summary><strong>POST</strong> <code>/cars</code></summary>
<br />
Adds a new car to the database, returns the added car with its generated id.

Example request body:

```json
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

</details>

<details>
<summary><strong>PUT</strong> <code>/cars/{id}</code></summary>
<br />
Updates the car with the specified id, returns the updated car.

Example request body:

```json
{
  "model": "Marea",
  "year": 1992,
  "color": "Red",
  "status": true,
  "buyValue": 12.000,
  "doorsQty": 2,
  "seatsQty": 5
}
```

Returns a 404 status code if the car with the specified id does not exist, or 422 if the mongo id is invalid.
</details>

<details>
<summary><strong>DELETE</strong> <code>/cars/:id</code></summary>
<br />
Deletes the car with the given id and returns a 204 status code. Returns a 404 error if the car is not found or 422 if the mongo id is invalid.
<br />
</details>

### Motorcycles

<details>
<summary><strong>GET</strong> <code>/motorcycles</code></summary>
<br />
Returns a list of all motorcycles in the database.

Example:

```json
  [
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Honda Cb 600f Hornet",
      "year": 2005,
      "color": "Yellow",
      "status": true,
      "buyValue": 30.000,
      "category": "Street",
      "engineCapacity": 600
    },
    {
      "id": "634852326b35b59438fbea31",
      "model": "Honda Cbr 1000rr",
      "year": 2011,
      "color": "Orange",
      "status": true,
      "buyValue": 59.900,
      "category": "Street",
      "engineCapacity": 1000
    }
  ]
```

</details>

<details>
<summary><strong>GET</strong> <code>/motorcycles/{id}</code></summary>

<br />

- Returns the motorcycle with the specified id.

- Example:

```json
  {
    "id": "634852326b35b59438fbea31",
    "model": "Honda Cbr 1000rr",
    "year": 2011,
    "color": "Orange",
    "status": true,
    "buyValue": 59.900,
    "category": "Street",
    "engineCapacity": 1000
  }
```

Returns a 404 status code if the motorcycle with the specified id does not exist, or 422 if the mongo id is invalid.

</details>

<details>
<summary><strong>POST</strong> <code>/motorcycles</code></summary>
<br />
Adds a new motorcycle to the database, returns the added motorcycle with its generated id.

Example request body:

```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
```

</details>

<details>
<summary><strong>PUT</strong> <code>/motorcycles/{id}</code></summary>
<br />
Updates the motorcycle with the specified id, returns the updated motorcycle.

Example request body:

```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2014,
  "color": "Red",
  "status": true,
  "buyValue": 45.000,
  "category": "Street",
  "engineCapacity": 600
}
```

Returns a 404 status code if the motorcycle with the specified id does not exist, or 422 if the mongo id is invalid.
</details>

<details>
<summary><strong>DELETE</strong> <code>/motorcycles/:id</code></summary>
<br />
Deletes the motorcycle with the given id and returns a 204 status code. Returns a 404 error if the motorcycle is not found or 422 if the mongo id is invalid.
<br />
</details>
