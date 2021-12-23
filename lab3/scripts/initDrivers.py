import random
import names
import pymongo
import string


def create_drivers(database, n_client=200):
    driver = database['Drivers']
    items = driver.find()
    id_start = 0
    
    if driver.count_documents({}) != 0:
        id_start = items.sort([("id", pymongo.DESCENDING)])[0]['id'] + 1
    package = []
    
    for i in range(n_client):
        car = (''.join(random.choices(string.ascii_letters + string.digits, k=8))).upper()
        item = {"id": id_start, 
                "name": names.get_full_name(), 
                "rating": round(random.uniform(2.5, 5),2),
                "car": car
                }
        package.append(item)
        id_start += 1
        
    driver.insert_many(package)


url = "mongodb://172.23.96.1:60000"

client = pymongo.MongoClient(url)
db = client['londonTaxi']

create_drivers(db, 1000)