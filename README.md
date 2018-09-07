# User API Exercise

This user api pulls random user info from `https://randomuser.me/api` and caches in memory.

```text
GET: /users
```

Will pull 10 users from `https://randomuser.me/api` endpoint and store in memory. Every subsequent
will add to the list currently in memory. 

```text
POST: /users
```   

Will add a user with the details provided in the post body.

```text
GET: /users/firstname/:firstname
```

Will find the first `firstname` provided in the path param. A  `404 NOT FOUND` will be returned if 
no entity with the provided first name does not exist. The find is performed case insensitive. 

## Postman

There is a postman collection that can be imported. It assumes the service will be run at
`http://localhost:3000`.

## Operating instructions

Designed to run on Node 8 as is recommended for this exercise.

### Install NPM packages and run
```bash
npm i
npm start
```

As a convenience, a docker container exists on the Docker Hub. Run on a docker host:

```bash
docker-compose up
``` 