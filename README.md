# **Cars API**

## **Prerequisites**

* [NodeJS](https://nodejs.org/en/download/)
* [MongoDB](https://www.mongodb.com/)
* [Robomongo](https://robomongo.org/) **_(Optional: GUI MongoDB Manager)_**
* [Docker](https://www.docker.com/community-edition)
* [Nodemon](https://github.com/remy/nodemon) **_(Optional: For development)_**

## **Configuration**

1. Configure MongoDB

    * Pull MongoDB image from [DockerHub](https://hub.docker.com/)
    ```ssh
    $ docker pull mongo
    ```

    * Run MongoDB container
    ```ssh
    $ docker run --name mongodb -p 127.0.0.1:27017:27017 -d mongo
    ```

    * Configure MongoDB for the application
        * Open a commandline utility
        ```ssh
        $ mongo
        ```

        * Create database `cars`
        ```ssh
        > use cars;
        > db.createCollection('cars');
        ```

        * Create administrator user for the database created
        ```ssh
        > db.createUser({user:"root", pwd:"r00t", roles: ["dbAdmin"]})
        ```

## **Install Dependencies**

1. To install dependencies, go to the main directory where is located the file `package.json`
```sh
$ npm install
```

## **Execution**

On the main directory where is located the file `server.js`

1. To run

    * If you have `nodemon` installed 
    ```sh
    $ nodemon server.js

    ```
    * If you don't have `nodemon` installed
    ```ssh
    $ node server.js
    ```

2. Finally, [test it here!!](http://127.0.0.1:3000)