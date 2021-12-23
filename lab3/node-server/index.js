const app = require('express')()
const cors = require('cors')
const MongoClient = require("mongodb").MongoClient;

app.use(cors())

let client = null;

app.get('/Orders/random', async (req, res) => {
    const db = client.db('londonTaxi')
    console.log('Orders connected to londonTaxi')
    
    const collection = db.collection('Orders')
    const order = await collection.find({}).skip(Math.floor(Math.random()*1000)).limit(1).toArray()
    console.log('order', order)
    return res.status(200).json({ order })
})

app.get('/Postcodes/borders', async (req, res) => {
    const db = client.db('londonTaxi')
    console.log('Postcodes connected to londonTaxi')

    const collection = db.collection('Postcodes')
    const postcodeWithMaxLong = (await collection.find({}).sort({ Longitude: 1 }).limit(1).toArray())[0].Longitude
    const postcodeWithMinLong = (await collection.find({}).sort({ Longitude: -1 }).limit(1).toArray())[0].Longitude
    const postcodeWithMaxLat = (await collection.find({}).sort({ Latitude: 1 }).limit(1).toArray())[0].Latitude
    const postcodeWithMinLat = (await collection.find({}).sort({ Latitude: -1 }).limit(1).toArray())[0].Latitude

    return res.status(200).json({ 
        maxX: postcodeWithMaxLong,
        minX: postcodeWithMinLong,
        maxY: postcodeWithMaxLat,
        minY: postcodeWithMinLat
     })
})

app.listen(3000, async () => {
    console.log('Started 3000')
    const url = "mongodb://172.23.96.1:60000";
    const mongoClient = new MongoClient(url);
    client = await mongoClient.connect()
})
