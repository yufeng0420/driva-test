# Driva Engineer Tech Challenge Solution

# Start project (Docker containers already been removed so no database connected, already comment database code)

- from the root of your application, `cd server`
  - `npm install`
  - `npm start` -  it will start your node server on port 8080, http://localhost:8080
- from the root of your application, open second terminal, run `cd ui` and `yarn start`
  - `cd ui`
  - `yarn`
  - `yarn start` - you now should have the front-end running on http://localhost:3000

# UI Frontend

* Validation: if input something wrong, border of input will become warning color (using "email-validator" library to validator email).
* Data: using react hooks to collect data in routes.tsx, and using axios to push to backend.
* Requirement: default right data type in api.ts. 

# Backend

* create one api "/customers/postData"
* using "class-validator" to do the validation for post data
* create table if not exist 
* save data in database, and send a success data to frontend

