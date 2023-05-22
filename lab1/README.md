

# Building Docker Environment


  Infrastructure:

    Task 1. Hello-world

    Task 2.  Lite-server

    Task 3. JSON-server

    Task 4. Nginx + Lite-server’s + JSON-server’s

    Task 5. Postman

    Report


## Task 1. Hello-world

_Prerequisites:_

Install docker and docker-compose.

_Links:_

[https://docs.docker.com/compose/compose-file/](https://docs.docker.com/compose/compose-file/)

[https://hub.docker.com/_/hello-world](https://hub.docker.com/_/hello-world)

_Description:_

**Pull docker image “hello-world”.**

**Create docker-compose.yaml for container deploying.**


**Deploy container and test the result.**

Goals:



* Check availability of container
* Setup basic configuration for docker-compose file
* Make sure the configuration is correct
* Become experience with docker cli and docker-compose cli


## Task 2. Lite-server

_Prerequisites:_

Install docker and docker-compose.

_Links:_

[https://hub.docker.com/_/node](https://hub.docker.com/_/node)

[https://www.npmjs.com/package/lite-server](https://www.npmjs.com/package/lite-server)

_Description:_

**Pull docker image “node”.**

**Create docker-compose.yaml for container with lite-server.**

**Create static resources for container.**


**Deploy container and test the result.**

Goals:

* Setup volumes mounting
* Setup ports forwarding
* Setup environment
* Check availability of resources via port


## Task 3. JSON-server

_Prerequisites:_

Install docker and docker-compose.

_Links:_

[https://hub.docker.com/_/node](https://hub.docker.com/_/node)

[https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)

_Description:_

**Pull docker image “node”.**

**Create docker-compose.yaml for container with JSON-server.**

**Create JSON-data for container.**

**Deploy container and test the result.**

Goals:



* Setup volumes mounting
* Setup ports forwarding
* Setup environment
* Check availability of REST resources in container


## Task 4. Nginx + lite-server’s + JSON-server’s

_Prerequisites:_

Install docker and docker-compose.

Done tasks: 2, 3.

_Links:_

[https://hub.docker.com/_/nginx](https://hub.docker.com/_/nginx)

[http://nginx.org/en/docs/](http://nginx.org/en/docs/)

_Description:_

**Pull docker image “nginx”.**

**Create docker-compose.yaml for containers:**

    - nginx

    - lite-server’s (no port forwarding)

    - JSON-server’s (no port forwarding)

**Scale lite-server containers up to 3.**

**Scale JSON-server containers up to 3.**


**Deploy containers and test the result.**

Goals:



* Setup volumes mounting
* Setup ports forwarding
* Setup environment
* Check availability of REST resources in container


## Task 5. Postman

_Prerequisites:_

Done task 4.

_Links:_

[https://www.postman.com/](https://www.postman.com/)

_Description:_

**Create request-collection for all routes in deployed containers.**

**Test the result.**

Goals:



* Check availability of all routes in container
