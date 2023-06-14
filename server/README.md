Synoptic Project Go API

Set-up: 

    Have docker installed and have pulled the postgres 15.3 image

    Run the following commands:

        make postgres
        make createdb
        make migrateup


To start server, make sure your docker container is running

Start:

    go run server/cmd/main.go

API Usage:

    User endpoints:

        /register - POST - takes following format json: {"username":"","password":"",role:""}
        /login - POST - takes following format jsonL {"username":"","password":""}

        /users - GET - returns all users on database
        /profile/{ID} - GET - ID is the id of the user, this returns the users profile which consists of \n their info, listings and posts

    Listing endpoints: 

        /listing - POST - creates a new listing, takes following json format: {"title":"","body":"","user_id":""}
        /listings - GET - returns all listings that are still available
        /listings/{ID} - GET - retuns a listing by its ID
        /listings/{ID} - PATCH - changes a listing from open to settled

    Post endpoints:

        
    


