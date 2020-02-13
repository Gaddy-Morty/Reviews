# reviews
How to start this component?

1. npm install
2. run 'mysql -u root -p < database/schema.sql' command in the terminal to create database and table
3. npm run seed-database
4. npm run react-dev
5. npm run start

CRUD API


GET /review/:property_id -get all reviews for specified listing

POST /review/:property_id -insert new review for specified listing

DELETE /review/:id/:property_id -delete specific review at specified listing

PUT /review/:id/:property_id -update a specific review at specifeid listing
