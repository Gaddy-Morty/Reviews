# reviews
How to start this component?

1. npm install
2. run 'mysql -u root -p < database/schema.sql' command in the terminal to create database and table
3. npm run seed-database
4. npm run react-dev
5. npm run start


CRUD API

GET /property/:property_id/reviews -get all reviews for specified listing
request object: none
response object: {
  property: {
    id: int
    owner: int
    cleaniness:
    accuracy:
    communication:
    location:
    checkin:
    value:
    reviews: {}
  }
}

POST /property/:property_id/reviews -insert new review for specified listing
request object: {
    review: {
        user: int,
        property: int,
        date: date,
        comment: varchar(5000),
        cleanliness: int,
        accuracy: int,
        communicaiton: int,
        location: int,
        checkin: int,
        value: int,
        response:int
    }
}
response object: none

DELETE /property/:property_id/reviews/:id -delete specific review at specified listing
request object: {
    review: {
        id: int.
        property: int
    }
}
response object: none

PUT /property/:property_id/reviews/:id -update a specific review at specified listing
request object: {
    review: {
        user: int,
        property: int,
        date: date,
        comment: varchar(5000),
        cleanliness: int,
        accuracy: int,
        communicaiton: int,
        location: int,
        checkin: int,
        value: int
    }
}
