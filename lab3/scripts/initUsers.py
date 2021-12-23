import random
import names
import pymongo


def create_users(database, n_client=200):
    client = database['Users']
    items = client.find()
    id_start = 0
    
    if client.count_documents({}) != 0:
        id_start = items.sort([("id", pymongo.DESCENDING)])[0]['id'] + 1
    package = []

    for i in range(n_client):
        item = {"id": id_start, 
                "name": names.get_full_name(), 
                "rating": round(random.uniform(2.5, 5),2),
                
                }
        package.append(item)
        id_start += 1
        
    client.insert_many(package)


url = "mongodb://172.23.96.1:60000"

client = pymongo.MongoClient(url)
db = client['londonTaxi']

create_users(db, 1000)