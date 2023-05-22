## Task 1
### To run and setup all mongo servers, please follow sharding\Setup.md
## Task 2
### Import data from csv
To import data go to high-loaded-systems\ run following command
```
mongoimport  --host 172.23.96.1:60000 --db londonTaxi --collection Postcodes /type:csv  --headerline --ignoreBlanks --file learn-mongodb\LondonPostcodes.csv
```

To check sharding for collection run 
```
db.collection.getShardDistribution()
```
## Task 3
### Go to scripts directory and run all scripts
```
python initDrivers.py
python initUsers.py
```


For Orders lets shard collection

```
mongo mongodb://172.23.96.1:60000
db.createCollection("Orders")
db.Orders.createIndex({ driverId: 1 })
sh.shardCollection("londonTaxi.Orders", { driverId: 1 } ) 
exit

mongo initOrders.js
```

## Task 4
### Top 50 users by rating

```
mongo mongodb://172.23.96.1:60000
use londonTaxi
db.Users.find().sort({rating: -1}).limit(50)
```
## Task 5

