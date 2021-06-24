[![Build Status](https://travis-ci.com/victkarangwa/Taxi24-API.svg?branch=develop)](https://travis-ci.com/victkarangwa/Taxi24-API) [![Coverage Status](https://coveralls.io/repos/github/victkarangwa/Taxi24-API/badge.svg?branch=develop)](https://coveralls.io/github/victkarangwa/Taxi24-API?branch=develop)   [![Maintainability](https://api.codeclimate.com/v1/badges/1c26b3586cbf10d24ccf/maintainability)](https://codeclimate.com/github/victkarangwa/Taxi24-API/maintainability)

# Taxi24-API

Taxi24 is a new startup based in Kigali. They would like to disrupt the taxi industry in Rwanda by providing a white-label solution to the existing taxi companies and hotels.

## Staging environment base URL
`https://taxi24-app.herokuapp.com/api/v1/`

## Setting Up The Application in development environment

### I. Clone the Application

1. Open your terminal

2. Run `clone https://github.com/victkarangwa/Taxi24-API.git` OR [Download](https://github.com/victkarangwa/Taxi24-API/archive/refs/heads/develop.zip) the project

### II. Setting up the environment

1. **Create** a `.env` file reflecting to `.env.example` file

2. Add the values to all environmental variables in `.env` file

3. Make sure you have PostgreSQL installed (You can download it [here](https://www.postgresql.org/download/))
4. This app uses Google direction api. Thus, you need to also provide google API keys. Read more on [Directions API](https://developers.google.com/maps/documentation/directions/overview)


### III. Testing the application

1. Run `npm run test` or `yarn test`
2. You should get `13 passing` test


### IV. Running the application

Open termin in the directory you clone the repo from:

1. Run `npm install` to install all dependencies

2. Using postgres, create database for both dev and testing environment. In your `.env`, database URL should be of this format:
   `DATABASE_DEV_URL=postgres://[user]:[password@[host]:[port/[db_name]`
   ex:
   `DATABASE_DEV_URL=postgres://postgres:123@localhost:5432/taxi24_dev`

3. Run `npm run db:migrate` or `yarn db:migrate` to automatically create all necessary models

4. Run `npm run db:seed:dev` or `yarn db:seed:dev` to seed data in the database

5. Run `npm run dev-server` to start local development server. You can also simulate production server locally by running `npm start`

6. Open your postman and access `http://localhost:<:APPLICATION_PORT>` (by default, the port is `3000`) , if app is running correctly, you will get a response with a message:

   ```javascript
   {
      status: 200,
      message: "TAXI24 APIs"
   }
   ```

7. For more, please read [Taxi24 API documentation](https://documenter.getpostman.com/view/7772830/TzecDRBV)

   # Author :computer:

   [Victor KARANGWA](https://github.com/victkarangwa)
