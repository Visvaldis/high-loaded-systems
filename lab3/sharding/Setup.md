## Set up Sharding using Docker Containers

### Config servers
Start config servers (3 member replica set)
```
docker-compose -f config-server/docker-compose.yaml up -d
```

For checking containers 
```
docker-compose -f config-server/docker-compose.yaml ps
```


Initiate replica set

*Change every ip to your machine ip (plus in mongos compose)*

```
mongo mongodb://172.23.96.1:40001
```

```
rs.initiate(
  {
    _id: "confRs",
    configsvr: true,
    members: [
      { _id : 0, host : "172.23.96.1:40001" },
      { _id : 1, host : "172.23.96.1:40002" },
      { _id : 2, host : "172.23.96.1:40003" }
    ]
  }
)

rs.status()
```

### Shard one server
Start shard one server (3 member replicas set)
```
docker-compose -f shard1/docker-compose.yaml up -d
```
Initiate replica set
```
mongo mongodb://172.23.96.1:20101
```
```
rs.initiate(
  {
    _id: "shard1rs",
    members: [
      { _id : 0, host : "172.23.96.1:20101" },
      { _id : 1, host : "172.23.96.1:20102" },
      { _id : 2, host : "172.23.96.1:20103" }
    ]
  }
)

rs.status()
```

## Adding as many shards as you need

### In my case 3 another

```
docker-compose -f shard2/docker-compose.yaml up -d

mongo mongodb://172.23.96.1:20201

rs.initiate(
  {
    _id: "shard2rs",
    members: [
      { _id : 0, host : "172.23.96.1:20201" },
      { _id : 1, host : "172.23.96.1:20202" },
      { _id : 2, host : "172.23.96.1:20203" }
    ]
  }
)

```

```
docker-compose -f shard3/docker-compose.yaml up -d

mongo mongodb://172.23.96.1:20301

rs.initiate(
  {
    _id: "shard3rs",
    members: [
      { _id : 0, host : "172.23.96.1:20301" },
      { _id : 1, host : "172.23.96.1:20302" },
      { _id : 2, host : "172.23.96.1:20303" }
    ]
  }
)
```

```
docker-compose -f shard4/docker-compose.yaml up -d

mongo mongodb://172.23.96.1:20401

rs.initiate(
  {
    _id: "shard4rs",
    members: [
      { _id : 0, host : "172.23.96.1:20401" },
      { _id : 1, host : "172.23.96.1:20402" },
      { _id : 2, host : "172.23.96.1:20403" }
    ]
  }
)
```

```
rs.status()
```


### Mongos Router
Start mongos query router
```
docker-compose -f mongos/docker-compose.yaml up -d
```

### Add shards to the cluster
Connect to mongos
```
mongo mongodb://172.23.96.1:60000
```
Add all shards
```
mongos> sh.addShard("shard1rs/172.23.96.1:20101,172.23.96.1:20102,172.23.96.1:20103")

mongos> sh.addShard("shard2rs/172.23.96.1:20201,172.23.96.1:20202,172.23.96.1:20203")

mongos> sh.addShard("shard3rs/172.23.96.1:20301,172.23.96.1:20302,172.23.96.1:20303")

mongos> sh.addShard("shard4rs/172.23.96.1:20401,172.23.96.1:20402,172.23.96.1:20403")
```

```
mongos> sh.status()
```

If you get error like:
```
Cannot start service shard4serv2: Ports are not available: listen tcp 0.0.0.0:20402: bind: An attempt was made to access a socket in a way forbidden by its access permissions.  
ERROR: Encountered errors while bringing up the project.
```
Run, to view a list of which ports are excluded from your user 
```
netsh interface ipv4 show excludedportrange protocol=tcp
```

