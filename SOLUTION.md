# Solution description 

Hi there, 
This is Driva developer home assignment 
Thank you

## How to start
Run the docker command in order to get the solution starter



- from the root of your application, run `docker-compose up -d`
- run docker ps, you should get three containers running.

If you encounter any problems with the docker connection,
you can do the following
- run docker stop driva-test_server_1 
- run docker stop driva-test_ui_1
- we now running only the database container
- from the root of your application, `cd server`
  - `npm install`
  - `npm start` -  it will start your node server on port 8080, http://localhost:8080
- from the root of your application, open second terminal, run `cd ui` and `yarn start`
  - `cd ui`
  - `yarn`
  - `yarn start` - you now should have the front-end running on http://localhost:3000

  If you want to connect the DB with UI tool

  ### Database
  
  You can use the following connection details:
  - Host: 127.0.0.1
  - User: root
  - Password: driva  
  - Database: driva






