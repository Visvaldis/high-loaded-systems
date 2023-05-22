# Building MongoDB Environment


 ## Infrastructure:


1. MongoDB sharding


2. Import and balance data


3. Generate more data


4. Analyse more data


5. Visualize data (bonus task)


## Task 1. MongoDB sharding

_Prerequisites:_

Install docker and docker-compose.

_Links:_

[https://docs.docker.com/compose/compose-file/](https://docs.docker.com/compose/compose-file/)

[https://hub.docker.com/_/mongo](https://hub.docker.com/_/mongo)

_Description:_

**Pull docker image “mongo”.**

**Create docker-compose.yaml for containers:**


    - mongo (one port forwarding, with mongos main process)

    - mongo (no port forwarding, config servers process)

    - mongo (no port forwarding, data servers process)

    - mongo (no port forwarding, data replica servers process)

**Scale “mongo config server” containers up to 3.**

**Scale “mongo data server containers” up to 4.**

**Scale “mongo data replica server” 2 for each “mongo config server”.**

**Make a secure connection between all “mongo server’s”.**


**Deploy containers and test the result.**

Goals:



* Setup configuration for docker-compose file
* Make sure the configuration is correct
* Become experience with mongo cli and mongo configuration


## Task 2. Import and balance data

_Prerequisites:_

Done task 1.

_Links:_

[https://www.doogal.co.uk/london_postcodes.php](https://www.doogal.co.uk/london_postcodes.php)

[https://data.london.gov.uk/dataset/postcode-directory-for-london](https://data.london.gov.uk/dataset/postcode-directory-for-london)

_Description:_

**Import London addresses.**


**Test the result.**

Goals:



* Become experience with mongo connection.


## Task 3. Generate more data

_Prerequisites:_

Done task 2.

_Description:_

**Use London addresses for simulations below.**

**Simulate taxi orders and store in base (with custom intensity).**

**Simulate taxi movement tracking and store in base (up to 10GB data).**

**Taxi without order are moving at nearest area.**

**Simulate taxi drive feedback and store in base.**


  **Test the result.**

Goals:



* Become experience with mongo CRUD.


## Task 4. Analyse more data

_Prerequisites:_

Done task 3.

_Description:_


  **Analyse drives and feedbacks according to variant in Lab 5.**

Goals:



* Become experience with mongo map-reduce operations


## Task 5. Visualize data (bonus task)

_Prerequisites:_

Done task 3.

_Description:_


  **Visualize taxi movement using map API.**

Goals:



* Become experience with map API
